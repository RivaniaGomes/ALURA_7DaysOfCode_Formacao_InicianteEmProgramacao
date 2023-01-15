const btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const nome = document.querySelector("#nome");
  const idade = document.querySelector("#idade");
  const linguagem = document.querySelector("#linguagem");
  const value = `Olá ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${linguagem.value}!`;
  console.log(value);
  alert(value)
});
