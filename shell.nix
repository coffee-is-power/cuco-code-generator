with import <nixpkgs> { };
mkShell {
  nativeBuildInputs = [
    nodejs-slim
    nodePackages.pnpm
  ];
  NIX_ENFORCE_PURITY = true;
}
