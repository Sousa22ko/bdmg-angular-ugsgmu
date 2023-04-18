# Código disponível no stackblitz

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/bdmg-angular-sffslp)

# Preview da página

[Acesse a página em 🔥](https://bdmg-angular-sffslp.stackblitz.io/)
![image](https://user-images.githubusercontent.com/18272944/232879736-36325f6a-8537-4b5c-ae1a-c8337c1ebde7.png)

# Forma de uso
O sistema possuí 2 cards na página:

- O primeiro card, ao abrir a página pela primeira vez, estará automaticamente preenchido com os dados fornecidos (os dados do cep 301609-07)
- Os campos do primeiro card são editáveis (exceto os campos explicitados)
- Ao terminar de digitar o cep, automaticamente será consultado na api dos correios e os outros campos serão preenchidos (não tinha isso nos requisitos mas o service já estava pronto e é uma boa melhoria na usabilidade geral do sistema)
- O botão de "Salvar dados no LocalStorage" salvam os dados do primeiro card no segundo card (que possuem os campos bloqueados para edição)
- Alguns campos possuem mascaras de preenchimento:
  - Cep: 00000-000
  - Complemento autopreenche os . das casas dos milhares
  - UF: SS (duas letras)
  - DDD: (00) (dois números com os parenteses que são automaticamente preenchidos)
  
  # Organização
  O sistema foi organizado e separado em pastas.
  
  O código principal desenvolvido por mim está no componente "form" localizado na pasta "components" e está organizado nos devidos arquivos .html, .ts e .scss (como é uma aplicação pequena, sem outras páginas, por sua vez sem necessidade de um router, só adicionei a chamada do componente que criei no final do app.component.html)
  
  Além disso existe o service "CepService" que está dentro da pasta service/cepService (só notei que já existia um service no projeto quando terminei, se não, teria usado ele rs)
  
  Criei um Model só pra organizar a resposta da API

###### dúvidas:
<reinaldo.sousacarvalho.95@gmail.com>
