# ⏱️ Racing Timer JS – Cronômetro com Registro de Voltas

Este projeto é uma aplicação web interativa que simula um cronômetro funcional e estilizado, com funcionalidades como **registro de voltas** e **salvamento automático via localStorage**. Ideal para acompanhar o tempo em exercícios, partidas de games, produtividade ou qualquer atividade que exija controle de tempo.

## 🚀 Funcionalidades

- **Iniciar, Pausar e Resetar o Timer**: Controle completo do tempo com apenas um clique.
- **Registrar Voltas (Laps)**: Permite salvar tempos parciais durante a contagem.
- **Reset Total**: Apaga todas as voltas salvas e reinicia o cronômetro do zero.
- **Persistência com localStorage**: As voltas são salvas automaticamente e mantidas mesmo após recarregar ou fechar o navegador.
- **Feedback Visual Dinâmico**: O cronômetro muda de cor e efeito de sombra conforme o status (ativo, pausado, resetado, etc.).

## 📚 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e organizada.
- **CSS3**: Estilização moderna e responsiva, com uso de variáveis, grid e media queries.
- **JavaScript**: Manipulação de tempo, DOM e armazenamento local.
- **Font Awesome**: Ícones elegantes na barra de título e rodapé.
- **Google Fonts**: Tipografia personalizada.

### 🧩 Como Funciona o Código

- **`formataTempo()`**: Formata horas, minutos, segundos e milissegundos para exibição consistente com 2 dígitos.
- **`atualizaTempo()`**: Atualiza o cronômetro a cada 10ms, controlando milissegundos, segundos, minutos e horas.
- **`#start` (Iniciar)**: Inicia a contagem e altera o texto do botão para "Contando". Inicia animação de transição.
- **`#stop` (Parar)**: Pausa o cronômetro, altera o texto do botão para "Parado" e fornece feedback visual.
- **`#reset` (Reiniciar)**: Zera o tempo do cronômetro, mas mantém o histórico de voltas.
- **`#resetFull` (Reset Completo)**: Zera tudo, incluindo o `localStorage` e as voltas registradas.
- **`#lap` (Volta)**: Adiciona uma volta com o tempo atual e salva no `localStorage`.

### 💾 Registro de Voltas

- **`salvarVoltas()`**: Coleta e salva as voltas em formato JSON no `localStorage`.
- **`carregarVoltas()`**: Carrega as voltas salvas ao iniciar a página e recria os itens na lista.

## 💡 Como Visualizar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/remyfonseca/timerRacing.git
   ```
2. Navegue até o diretório do projeto.
3. Abra o arquivo `index.html` no navegador para visualizar e interagir com o Timer.
4. Acesse o Racing Timer diretamente no GitHub Pages: https://remyfonseca.github.io/timerRacing/

## 📬 Contato

- **GitHub**: [Remy Fonseca - Github](https://github.com/remyfonseca)
- **LinkedIn**: [Remy Fonseca - Linkedin](https://www.linkedin.com/in/remyfonseca/)

---

**© 2025 Remy Fonseca - Todos os direitos reservados.**