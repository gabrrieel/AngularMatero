export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `${moduleName} já foi carregado. Importar módulos principais apenas no AppModule.`
    );
  }
}
