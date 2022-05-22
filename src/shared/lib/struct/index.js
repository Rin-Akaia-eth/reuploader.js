import { Remeda } from "../deps.js"

export const Struct = {
	impureEvolve: (isAffectable, effect) => (dataset) =>
		Remeda.map.indexed(dataset, (object, index) =>
			Remeda.mapValues(object, (value) =>
				isAffectable(value) ? effect({ index, object, total: dataset.length, value }) : value,
			),
		),
}
