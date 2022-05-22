import isUrl from "is-url"
import fetch from "node-fetch"

import { Fs, Path, Prettier, Ramda, Remeda, Url } from "../../deps.js"
import { Filesystem } from "../shared/api/filesystem/index.js"
import { Struct } from "../shared/lib/struct/index.js"

const downloadFx =
	({ cache, destination }) =>
	async ({ index, object, total, value }) => {
		try {
			const { body, url } = await fetch(value)

			const fileName = Path.basename(new Url.URL(url).pathname)

			const fileStream = await Filesystem.createFx({
				dirPath: Path.join(cache, object.pubDate),
				fileName,
			})

			body.pipe(
				fileStream.on("finish", () => {
					fileStream.end()
					console.log(`Downloaded ${index} file of ${total}`)
				}),
			)

			return Ramda.join("/", [destination, object.pubDate, fileName])
		} catch (error) {
			console.error(error)
		}
	}

export const main = ({ cache, dataset, destination }) =>
	Remeda.pipe(
		Fs.readFileSync(dataset, (error, dataset) => (error ? console.error(error) : dataset)),

		JSON.parse,

		Struct.impureEvolve(
			Ramda.both(isUrl, Ramda.either(Ramda.includes(".jpg"), Ramda.includes(".mp4"))),
			downloadFx({ cache, destination }),
		),

		JSON.stringify,

		(json) => Prettier.format(json, { parser: "json" }),

		(datasetUpdated) =>
			Fs.writeFileSync(Path.join(cache, "dataset-updated.json"), datasetUpdated, console.error),
	)
