import {static_assert} from "../src";

static_assert<true>(true);
//static_assert<true>(false); // ERROR
//static_assert<false>(true); // ERROR
static_assert<false>(false);
