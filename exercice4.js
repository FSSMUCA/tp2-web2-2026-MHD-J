console.log(`0 == ""        -> ${0 == ""}     |  0 === ""          -> ${0 === ""}`,
);
console.log(`0 == "0"       -> ${0 == "0"}    |  0 === "0"         -> ${0 === "0"}`,
);
console.log(`0 == false     -> ${0 == false}  |  0 === false           -> ${0 === false}`,
);
console.log(`"" == false    -> ${"" == false} |  "" === ""         -> ${"" === false}`,
);
console.log(`null == undefined  -> ${null == undefined}  |  null === undefined  -> ${null === undefined}`,
);
console.log(`null == false  -> ${null == false}  |  null === false  -> ${null === false}`,
);
console.log(`NaN == NaN     -> ${NaN == NaN}  |  NaN === NaN      -> ${NaN === NaN}`,
);
console.log(`1 == "1"     -> ${1 == "1"}  |  1 === "1"    -> ${1 === "1"}`,
);
console.log(`" \\t\\n " == 0     -> ${" \t\n " == 0}  |  " \\t\\n " === 0   -> ${" \t\n " === 0}`,
);

let count = 0;
if ((0 == "") !== (0 === "")) count++;
if ((0 == "0") !== (0 === "0")) count++;
if ((0 == false) !== (0 === false)) count++;
if (("" == false) !== ("" === false)) count++;
if ((null == undefined) !== (null === undefined)) count++;
if ((null == false) !== (null === false)) count++;
if ((NaN == NaN) !== (NaN === NaN)) count++;
if ((1 == "1") !== (1 === "1")) count++;
if ((" \t\n " == 0) !== (" \t\n " === 0)) count++;

console.log("---");
console.log(`${count} paire(s) où == et === donnent des résultats différents`);
