interface Usuario {
  nome: string;
  email: string;
  endereco?: string;
}

function getUsuario(): Usuario {
  return {
    nome: 'Felipe',
    email: 'teste@teste.com'
  };
}

function setUsuario(usuario: Usuario) {
  // ...
}