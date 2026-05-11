// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Alternância de Tema (Claro/Escuro)
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // 2. Validação e Simulação de Envio do Formulário
    const contactForm = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validação simples de e-mail usando Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nome.trim() === "" || mensagem.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        // Simulação de Sucesso
        feedback.innerText = `Obrigado, ${nome}! Sua mensagem foi "enviada" com sucesso.`;
        feedback.classList.remove('hidden');

        // Limpar campos
        contactForm.reset();

        // Esconder mensagem de sucesso após 5 segundos
        setTimeout(() => {
            feedback.classList.add('hidden');
        }, 5000);
    });

    // Identifica os links e as seções
    const links = document.querySelectorAll('.nav-links a');
    const secoes = document.querySelectorAll('section');

    function destacarMenu() {
        let idAtual = "";

        secoes.forEach((secao) => {
            const secaoTopo = secao.offsetTop;
            // O 150 é um "espaço de segurança" para o destaque mudar um pouco antes de chegar no topo
            if (window.pageYOffset >= secaoTopo - 150) {
                idAtual = secao.getAttribute("id");
            }
        });

        links.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${idAtual}`) {
                link.classList.add("active");
            }
        });
    }

    // Executa a função toda vez que o usuário rolar a página
    window.addEventListener("scroll", destacarMenu);
});