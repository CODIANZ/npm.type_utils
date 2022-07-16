import {As, as_} from "../src";

type X = {a: number};
const x = As<X>({a: 1});
const xx = as_<X>({a: 1});
