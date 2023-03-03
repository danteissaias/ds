import { PartialRecord } from "./types";

export type WithBreakpoints<T extends string> =
  | PartialRecord<"sm" | "md" | "lg" | "xl" | "2xl" | "initial", T>
  | T;

export const withBreakpoints = <T extends string>(
  prop: string,
  val?: WithBreakpoints<T>
) => {
  if (val === "" || val === undefined) return "";

  const classnames = [];

  if (typeof val === "object") {
    for (const [bp, bpVal] of Object.entries(val)) {
      const negative = bpVal.startsWith("-");
      const g = negative ? "-".concat(prop) : prop;
      const m = negative ? bpVal.substring(1) : bpVal;

      const classname =
        bp === "initial" ? "".concat(g, "-", m) : "".concat(bp, ":", g, "-", m);
      classnames.push(classname);
    }
  } else if (typeof val === "string") {
    const p = val.startsWith("-"),
      g = p ? "-".concat(prop) : prop,
      m = p ? val.substring(1) : val;
    classnames.push("".concat(g).concat("-").concat(m));
  }

  return classnames.join(" ");
};
