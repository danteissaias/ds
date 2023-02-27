import spinner from "./spinner.module.css";

export function Spinner() {
  return (
    <div className={spinner.root}>
      <div className={spinner.bars}>
        <div className={spinner.bar}></div>
        <div className={spinner.bar}></div>
        <div className={spinner.bar}></div>
        <div className={spinner.bar}></div>
        <div className={spinner.bar}></div>
        <div className={spinner.bar}></div>
        <div className={spinner.bar}></div>
        <div className={spinner.bar}></div>
        <div className={spinner.bar}></div>
        <div className={spinner.bar}></div>
        <div className={spinner.bar}></div>
        <div className={spinner.bar}></div>
      </div>
    </div>
  );
}
