import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";


export default defineConfig({
    input:'src/index.ts',
    output:{
        dir:"dist",
        format:"es",
        name:'http-codes-helper'
    },
    plugins:[typescript({tsconfig:'tsconfig.json'})]
})