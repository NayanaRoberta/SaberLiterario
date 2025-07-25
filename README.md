﻿## Projeto Integrado IV - Sistema de Biblioteca 
# Universidade Federal do Cariri 🎓
Centro de Educação à Distância Curso de Análise e Desenvolvimento de Sistemas

<p align="center">
    <img src="https://github.com/NayanaRoberta/SaberLiterario/blob/main/photos/image.png?raw=true" alt="Saber Literário Logo" width="1000px">
</p>

<p align="center">

</p>

## Sobre o Projeto
Sobre o Projeto
O Saber Literário é um sistema projetado para simplificar as rotinas de bibliotecas de pequeno porte, oferecendo ferramentas simples de gerenciamento que são fáceis de entender e usar. O projeto foi desenvolvido com base nos princípios de acessibilidade e usabilidade, visando atender tanto bibliotecas comunitárias quanto escolares.

Com este sistema, você pode:

📚 Cadastrar livros e usuários;<br>
🔍 Buscar e organizar acervos facilmente;<br>
🖥️ Melhorar a gestão de empréstimos e devoluções.<br>

Pensado para ser simples e didático, o sistema facilita a organização das tarefas do dia a dia e apoia o usuário a trabalhar de forma mais prática e descomplicada. 

## Funcionalidades (o que já foi desenvolvido)
Versão 1 - Início do Projeto e Implementação Inicial<br>
Repositório:<br>
Na primeira versão do projeto, foram introduzidas as seguintes funcionalidades:
Estruturamos nossa base inicial para cadastro de livros.
Criamos um template básico de interface para fácil interação com o usuário.
Desenvolvemos o sistema de cadastro básico de usuários e gerenciadores.


Versão 2 - Melhorias e Ajustes<br>
Repositório: <br>
Foram feitos ajustes importantes para tornar o sistema ainda mais funcional:
Implementação de melhorias na interface, garantindo maior acessibilidade.
Sistema de busca otimizado para localizar obras no acervo rapidamente.
Melhorias no fluxo de cadastro de usuários e registro de empréstimos.
Correções de bugs identificados na versão inicial.

## O que vem a seguir:
Estamos trabalhando ativamente para deixar o Saber Literário ainda mais completo. No roadmap do projeto, temos:

🔍 Relatórios dinâmicos: estatísticas sobre os livros mais emprestados, usuários ativos, entre outros;<br>
🖥️ Interface Web responsiva: tornar o sistema utilizável em dispositivos móveis e tablets;<br>
📂 Exportação de relatórios: permitir exportar informações em formatos como PDF e Excel;<br>
💬 Mensagens e notificações: enviar lembretes automáticos para devolução de livros atrasados.<br>


## Funcionalidades
📌 Cadastrar clientes – Registre novos usuários da biblioteca<br> 
📚 Cadastrar livros – Adicione novos títulos ao acervo<br> 
🔍 Buscar livros – Pesquise livros pelo título, autor ou categoria<br> 
🔄 Emprestar livros – Realize empréstimos de forma rápida e eficiente<br> 
✅ Consultar disponibilidade – Verifique se um livro está disponível ou emprestado<br> 
📜 Histórico de empréstimos – Acompanhe os livros emprestados e devolvidos<br> 
🧾 Emitir recibo – Gere comprovantes de empréstimos para os clientes<br> 

### O que vem a seguir: Roadmap do Projeto
Estamos trabalhando ativamente para deixar o Saber Literário ainda mais completo. No roadmap do projeto, temos:
*   🔍 **Relatórios dinâmicos**: estatísticas sobre os livros mais emprestados, usuários ativos, entre outros.
*   🖥️ **Interface Web responsiva**: tornar o sistema utilizável em dispositivos móveis e tablets.
*   📂 **Exportação de relatórios**: permitir exportar informações em formatos como PDF e Excel.
*   💬 **Mensagens e notificações**: enviar lembretes automáticos para devolução de livros atrasados.

## Integração Contínua (CI) com GitHub Actions

Este projeto utiliza **Integração Contínua (CI)** por meio do **GitHub Actions** para automatizar e otimizar o processo de desenvolvimento, garantindo a qualidade do código e do conteúdo.

### O que é Integração Contínua e por que é importante? 

A Integração Contínua é uma prática de desenvolvimento de software onde os desenvolvedores integram seu código em um repositório compartilhado várias vezes ao dia. Ou seja é quando os desenvolvedores vão juntando seu código em um repositório compartilhado, pra garantir que tudo funcione bem junto. Cada integração é imediatamente verificada por um build automatizado (processo de testar e preparar automaticamente), permitindo a **detecção rápida de erros e conflitos**.

Para quem está iniciando em programação, como nós da UFCA, a CI é **extremamente importante**:
*   **Garante a qualidade do código desde o início**: Ajuda a identificar e corrigir problemas (como erros de sintaxe em HTML/CSS ou links quebrados) de forma automática e contínua, prevenindo que pequenos erros se tornem grandes desafios no futuro.
*   **Facilita a colaboração em equipe**: Ao padronizar verificações automáticas, assegura que o código de todos os membros da equipe siga as mesmas regras e padrões, tornando o projeto mais consistente e fácil de manter por qualquer desenvolvedor, mesmo os que são novos no projeto.
*   **Melhora a experiência do usuário final**: Ao verificar aspectos cruciais como ortografia e a funcionalidade dos links, garante que o conteúdo final seja profissional e livre de falhas, evitando frustrações para quem utiliza o sistema.
*   **Otimiza o fluxo de trabalho**: Reduz a necessidade de verificações manuais demoradas, permitindo que a equipe foque em desenvolver novas funcionalidades e inovar.

### Objetivo da CI neste Projeto  

O principal objetivo ao implementar a Integração Contínua no "Saber Literário" foi **automatizar a validação e verificação da qualidade do código e do conteúdo** de forma contínua. Isso permite:
*   Manter um padrão elevado de qualidade para o site antes mesmo de qualquer nova funcionalidade ser publicada ou alteração ser integrada ao projeto principal.
*   Detectar rapidamente erros e inconsistências no código ou no conteúdo, garantindo que o projeto esteja sempre em conformidade com os padrões e funcionando corretamente.

### Como a CI foi configurada (GitHub Actions) 

Configuramos o GitHub Actions para executar automaticamente uma série de validações a cada atualização do código (**_push_**) na branch principal (`main`) ou a cada **_pull request_** As configurações de cada tarefa de automação da CI foram definidas em **arquivos `.yml` distintos**, localizados dentro do diretório **`.github/workflows/`** do nosso repositório.

A estrutura geral de cada arquivo de workflow foi definida para ser clara e modular, facilitando a leitura e manutenção 
*   `name`: Define um nome claro e descritivo para o workflow, que é visível na aba "Actions" do GitHub. Isso facilita a identificação rápida da tarefa automatizada que está sendo executada.
*   `on`: Especifica os eventos de acionamento que iniciarão o workflow. Garantindo que as verificações automáticas ocorram nos momentos certos do ciclo de desenvolvimento.
*   `jobs`: Contém a definição de um ou mais trabalhos (jobs) a serem executados.
*   `runs-on`: Especifica o sistema operacional da máquina virtual onde as etapas serão processadas.
*   `steps`: Lista a sequência de passos que compõem o job. Cada passo é uma ação específica.

Essa organização padronizada garante que cada workflow seja modular, fácil de ler e simples de manter, contribuindo para uma integração contínua.

As **tarefas automatizadas** que implementamos e que contribuem diretamente para a qualidade do projeto incluem:
*   **Validação de HTML**: Garante que a estrutura HTML esteja correta, prevenindo erros de renderização e garantindo a compatibilidade em diferentes navegadores e dispositivos.
*   **Validação de CSS**: Assegura que suas folhas de estilo estejam bem-escritas, livres de erros de sintaxe e alinhadas com as melhores práticas de *linting*, mantendo seu CSS limpo e consistente.
*   **Detecção de Links Quebrados**: Verifica se todos os links, tanto internos quanto externos, estão funcionando. Isso melhora a experiência do usuário, evita frustrações e otimiza o site para motores de busca (SEO).
*   **Verificação de Ortografia**: Identifica erros de digitação e gramática no conteúdo do site, garantindo profissionalismo e clareza na comunicação.
*   **Verificação de Pastas (Estrutura de Diretórios)**: Assegura que a organização do projeto siga padrões definidos. Isso é vital para facilitar a navegação no código e a manutenção por qualquer desenvolvedor, seja ele novo no projeto ou não.

Essas automações ajudam a manter o projeto "Saber Literário" limpo, funcional e mais fácil de manter ao longo do tempo.
**Acessibilidade e Inclusão**
O Sistema Saber Literário foi desenvolvido com um forte compromisso com a acessibilidade e usabilidade desde suas concepções iniciais. Nosso objetivo é garantir que o **sistema seja funcional e compreensível** para o maior número de usuários possível, incluindo aqueles com diferentes necessidades.
Para alcançar este objetivo, implementamos as seguintes diretrizes e funcionalidades:
* Design Intuitivo e Inclusivo: A interface foi planejada para atender a diversos públicos, como pessoas com Transtorno do Déficit de Atenção com Hiperatividade (TDAH), baixa visão e dificuldades cognitivas.
* Alto Contraste e Legibilidade: A paleta de cores utiliza alto contraste entre o fundo branco, texto preto e elementos amarelos para facilitar a leitura. Esta escolha segue as Diretrizes de Acessibilidade de Conteúdo da Web (WCAG), assegurando que informações cruciais sejam visíveis para usuários com baixa visão. 
* Navegação Otimizada: A estrutura da interface, com o uso claro de títulos, legendas e listas, simplifica a navegação e a compreensão do conteúdo.
* Prevenção de Barreiras Visuais: O sistema não utiliza animações piscantes, que poderiam ser prejudiciais para pessoas com epilepsia fotossensível ou dificuldades de concentração.
* Melhorias Contínuas: Na Versão 2 do projeto, foram introduzidas melhorias significativas na interface para garantir ainda maior acessibilidade. Interface Web responsiva para tornar o sistema utilizável em diversos dispositivos, como celulares e tablets.
* Qualidade de Código e Conteúdo: A Integração Contínua (CI) com validações de HTML e CSS, detecção de links quebrados e verificação de ortografia contribui para uma base de código e conteúdo mais robusta e livre de erros, o que indiretamente apoia a acessibilidade ao garantir que tecnologias assistivas possam interpretar o site corretamente.


<p align="center">
    <img src="https://private-user-images.githubusercontent.com/165864220/415410888-e7380072-f9d6-4309-b752-e31ddf457e97.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI5NzcwMzUsIm5iZiI6MTc1Mjk3NjczNSwicGF0aCI6Ii8xNjU4NjQyMjAvNDE1NDEwODg4LWU3MzgwMDcyLWY5ZDYtNDMwOS1iNzUyLWUzMWRkZjQ1N2U5Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcyMFQwMTU4NTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01YTE2YWJjMmY3MmYyMGJjZDdiMTFiZjIzYTMxYzVjZGYxZTc5NGNiMjE0MDIxNmUwMjY4ZjNhOWYzNzdkMTlmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.meXLTQMeVRJZzb72FPC7kG_6qTimojkSmTtmUdWHbhE" alt="Saber Literário Logo" width="1000px">
</p>

<p align="center">

</p>

<p align="center">
    <img src="https://private-user-images.githubusercontent.com/165864220/415410865-c1eae3d8-f9c3-42d3-bd29-a10844c0923c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI5NzcwMzUsIm5iZiI6MTc1Mjk3NjczNSwicGF0aCI6Ii8xNjU4NjQyMjAvNDE1NDEwODY1LWMxZWFlM2Q4LWY5YzMtNDJkMy1iZDI5LWExMDg0NGMwOTIzYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcyMFQwMTU4NTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMDU1MmNiM2M5ZWQ2OGYxMzk3N2JlYzRlNWUzZjlkZTEwZDhkNTg4YTUyZTU5YzYzNzEyMGQxNDI4NDI3MTRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ofz6MOVBIY3wh18RA0-Z2jwlf1PNCk2d3imqwFSjf5g" alt="Saber Literário Logo" width="1000px">
</p>

<p align="center">

</p>
<p align="center">
    <img src="https://private-user-images.githubusercontent.com/165864220/415410846-bef704c1-806f-4e73-bc8a-2d0fb0327214.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI5NzcwMzUsIm5iZiI6MTc1Mjk3NjczNSwicGF0aCI6Ii8xNjU4NjQyMjAvNDE1NDEwODQ2LWJlZjcwNGMxLTgwNmYtNGU3My1iYzhhLTJkMGZiMDMyNzIxNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcyMFQwMTU4NTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NDQzZjQzYTFiODViNzdkYjNmZGI4MGI2NDk0MTU2ZDQ4NDRhYjNkZDc2MWQwYTVhY2Q5YWE3ZjkyNjk0MTkwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Da1PQgdPQYbp-iPpdGsMz69BhdleGoc0tqNPSJbSnrg" alt="Saber Literário Logo" width="1000px">
</p>

<p align="center">

</p>

<p align="center">
    <img src="https://private-user-images.githubusercontent.com/165864220/415410829-356de5cc-ccd0-4ebe-8bfd-480e8a65eb4c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI5NzcwMzUsIm5iZiI6MTc1Mjk3NjczNSwicGF0aCI6Ii8xNjU4NjQyMjAvNDE1NDEwODI5LTM1NmRlNWNjLWNjZDAtNGViZS04YmZkLTQ4MGU4YTY1ZWI0Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcyMFQwMTU4NTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03OTYyZjMzZDY5MWQ4YmQ1ZjM4MjcyYzZiNjgwMjVjZTBhNzc4MGFlODY3NTRhMzdjY2YyMmMyOWUzNGFkNDBkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.LxreZphuIX6bLj43j-CAqqg0OG2tAoNUT96jh_HCobM" alt="Saber Literário Logo" width="1000px">
</p>


</p>
<h2 id="colab">🤝 Collaborators</h2>

Special thank you for all people that contributed for this project.

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/117601283?v=4" width="100px;" alt="VitorRafaelx Profile Picture"/><br>
        <sub>
          <b>Vitor Rafael</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/169853314?v=4" width="100px;" alt="Nayana Roberta Picture"/><br>
        <sub>
          <b>Nayana Roberta</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/197955069?v=4" width="100px;" alt="Jerdison"/><br>
        <sub>
          <b>Jerdison</b>
        </sub>
      </a>
    </td>
      <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/169839417?s=64&v=4" width="100px;" alt="Jerdison"/><br>
        <sub>
          <b>Emanuel Palácio</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/165864220?s=64&v=4" width="100px;" alt="Jerdison"/><br>
        <sub>
          <b>Jorge Luiz</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


🕓 Histórico do Projeto
Este repositório corresponde à Versão 3 do projeto. Abaixo, estão os links para as versões anteriores:

Versão 1 - [Início do Projeto e Implementação Inicial](https://github.com/NayanaRoberta/RefugioLiterario)

Versão 2 - [Melhorias e Ajustes](https://github.com/jorgejuliao/Saber-Literario)

<h2 id="license">License 📃 </h2>

This project is under [MIT](./LICENSE) license








