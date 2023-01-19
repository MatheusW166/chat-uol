const errors = {
  400: "Este nome já está em uso, coloque um nome diferente.",
};

function getError(code) {
  return { error: errors[code] ?? "Erro desconhecido, tente novamente." };
}

function isError(response) {
  return typeof response === "object" && "error" in response;
}

export { getError, isError };
