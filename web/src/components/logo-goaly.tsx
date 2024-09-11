import logo from "../assets/logo-goaly.svg";

export function LogoGoaly() {
  return (
    <div className="flex items-center gap-3">
      <img src={logo} alt="goaly" />
      <span className="text-zinc-300 font-semibold text-2xl tracking-wide leading-0">
        goaly
      </span>
    </div>
  );
}
