const DADOS = {
    nome: "Heitor",
    papel: [
        "Desenvolvedor Back-end",
        "Estudante de Desenvolvimento de Sistemas",
        "Entusiasta de tecnologia"
    ],
    status: "em busca de estágio em TI",

    bio: "Sou estudante do curso Técnico em Desenvolvimento de Sistemas no Colégio Estadual José Pioli. Tenho foco principal em desenvolvimento Back-end, construindo a lógica, a estrutura e as regras que fazem os sistemas funcionarem.",

    sobre: {
        paragrafo1: "Iniciei minha trajetória na programação por meio do curso Técnico em Desenvolvimento de Sistemas no Colégio Estadual José Pioli. O que mais me motiva é resolver problemas por trás dos bastidores — estruturando regras de negócio, manipulando dados e garantindo que cada aplicação funcione com eficiência e organização.",
        paragrafo2: "Atualmente, busco minha primeira oportunidade de estágio ou vaga júnior na área de tecnologia para colocar meus conhecimentos em prática, aprender com profissionais experientes e evoluir em equipe.",
        timeline: [
            { data: "2024", texto: "Início do curso Técnico em <strong>Desenvolvimento de Sistemas</strong> no Colégio Estadual José Pioli." },
            { data: "2024", texto: "Primeiro projeto individual: <strong>Sistema de Barbearia</strong>." },
            { data: "2025", texto: "Segundo projeto individual: <strong>Alura Plus</strong>." },
            { data: "2025", texto: "Primeiro projeto em equipe: <strong>loja metal</strong>." },
            { data: "2026", texto: "Segundo projeto em equipe (pesquisa e entrevistas): <strong>monitoramento climatáco</strong>." },
            { data: "2026", texto: "Terceiro projeto em equipe: <strong>chat médico</strong>." },
            { data: "2026", texto: "Terceiro projeto individual: <strong>Portfólio Pessoal</strong>." }
        ]
    },

    curriculoUrl: "curriculo.pdf",
    email: "geffer.heitor@escola.pr.gov.br",

    redes: [
        { nome: "GitHub", url: "https://github.com/Heitorteixeira04" },
        { nome: "LinkedIn", url: "https://www.linkedin.com/in/heitor-geffer-419051451" },
        { nome: "Instagram", url: "https://www.instagram.com/heitor_teixeira04?jplx=MTcxMDdpbHRhOHUzeA%3D%3D&utm_source=qr" }
    ],

    projetos: [
        {
            versao: "v1.0",
            titulo: "Alura Plus",
            data: "2025",
            descricao: "Página promocional desenvolvida para praticar estruturação semântica, estilização responsiva e organização de layouts.",
            tags: ["HTML", "CSS", "JavaScript"],
            imagem: "alura.png",
            linkDemo: "https://alura-plus-ashen-gamma.vercel.app/",
            linkRepositorio: "https://github.com/Heitorteixeira04/Alura-Plus"
        },
        {
            versao: "v1.2",
            titulo: "Loja Metal",
            data: "Mar 2026",
            descricao: "Aplicação web de catálogo e vitrine virtual desenvolvida para exposição de produtos e navegação intuitiva.",
            tags: ["HTML", "CSS", "JavaScript"],
            imagem: "metal.png",
            linkDemo: "https://loja-metalll-snfw.vercel.app/",
            linkRepositorio: "https://github.com/Heitorteixeira04/loja-metal"
        }
    ],

    skills: [
        { categoria: "Front-end", itens: ["HTML", "CSS", "JavaScript"] },
        { categoria: "Back-end", itens: ["PHP", "Java", "C#"] },
        { categoria: "Dados", itens: ["SQL Server", "MySQL"] },
        { categoria: "Ferramentas", itens: ["GitHub", "Git", "VS Code", "Vercel", "Canva"] }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    renderConteudo();
    iniciarTema();
    iniciarMenuMobile();
    iniciarTypingEfeito();
    iniciarFiltrosDeProjetos();
    iniciarCopiarEmail();
    iniciarBotaoTopo();
    iniciarLogAnimado();
});

function renderConteudo() {
    setText("nav-nome", DADOS.nome);
    setText("destaque-nome", DADOS.nome);
    setText("rodape-nome", DADOS.nome);
    setText("texto-status", DADOS.status);
    setText("destaque-bio", DADOS.bio);
    setText("rodape-ano", new Date().getFullYear());
    document.title = `${DADOS.nome} — Portfólio`;

    setText("sobre-paragrafo-1", DADOS.sobre.paragrafo1);
    setText("sobre-paragrafo-2", DADOS.sobre.paragrafo2);

    const cv = document.getElementById("contato-curriculo");
    if (cv) cv.href = DADOS.curriculoUrl;

    // Linha do tempo (Sobre)
    const ti = document.getElementById("sobre-linha-tempo");
    if (ti) {
        ti.innerHTML = DADOS.sobre.timeline.map(item => `
            <li>
                <span class="linha-data">${item.data}</span>
                <span class="linha-texto">${item.texto}</span>
            </li>
        `).join("");
    }

    // Redes Sociais
    const socialHtml = DADOS.redes
        .filter(r => r.url && r.url !== "")
        .map(r => `<li><a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.nome}</a></li>`)
        .join("");

    const destaqueRedes = document.getElementById("destaque-redes");
    const contatoRedes = document.getElementById("contato-redes");
    if (destaqueRedes) destaqueRedes.innerHTML = socialHtml;
    if (contatoRedes) contatoRedes.innerHTML = socialHtml;

    // Projetos
    const timeline = document.getElementById("projetos-linha-tempo");
    if (timeline) {
        timeline.innerHTML = DADOS.projetos.map(p => `
            <article class="projeto" data-tags="${p.tags.map(t => t.toLowerCase()).join(",")}">
                <div class="projeto__versao">${p.versao}</div>
                <div class="projeto__info">
                    <h3 class="projeto__titulo">${p.titulo}</h3>
                    <p class="projeto__meta">${p.data}</p>
                    <p class="projeto__descricao">${p.descricao}</p>
                    <div class="projeto__tags">
                        ${p.tags.map(t => `<span class="etiqueta">${t}</span>`).join("")}
                    </div>
                    <div class="projeto__links">
                        ${p.linkDemo && p.linkDemo !== "#" ? `<a href="${p.linkDemo}" target="_blank" rel="noopener noreferrer">Ver demo</a>` : ""}
                        ${p.linkRepositorio && p.linkRepositorio !== "#" ? `<a href="${p.linkRepositorio}" target="_blank" rel="noopener noreferrer">Repositório</a>` : ""}
                    </div>
                </div>
                ${p.imagem ? `
                <div class="projeto__miniatura">
                    <img src="${p.imagem}" alt="Captura de tela de ${p.titulo}">
                </div>` : ""}
            </article>
        `).join("");
    }

    // Filtros de Projetos
    const tags = new Set();
    DADOS.projetos.forEach(p => p.tags.forEach(t => tags.add(t)));

    const filtros = document.getElementById("projetos-filtros");
    if (filtros) {
        const botoesTags = Array.from(tags).map(t =>
            `<button class="filtro-botao" data-filter="${t.toLowerCase()}">${t}</button>`
        ).join("");
        filtros.innerHTML = `<button class="filtro-botao esta-ativo" data-filter="todos">Todos</button>${botoesTags}`;
    }

    // Habilidades (Skills)
    const habilidadesGrupos = document.getElementById("habilidades-grupos");
    if (habilidadesGrupos) {
        habilidadesGrupos.innerHTML = DADOS.skills.map(g => `
            <div class="habilidade-grupo">
                <h3 class="habilidade-grupo__titulo">${g.categoria}</h3>
                <div class="habilidade-grupo__tags">
                    ${g.itens.map(item => `<span class="habilidade-etiqueta">${item}</span>`).join("")}
                </div>
            </div>
        `).join("");
    }
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

function iniciarTema() {
    const btn = document.getElementById("alternar-tema");
    if (!btn) return;

    const salvo = localStorage.getItem("portifolio-theme");
    if (salvo === "light") {
        document.documentElement.setAttribute("data-theme", "light");
    }

    btn.addEventListener("click", () => {
        const atual = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
        const novo = atual === "light" ? "dark" : "light";

        if (novo === "dark") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
        localStorage.setItem("portifolio-theme", novo);
    });
}

function iniciarMenuMobile() {
    const burguer = document.getElementById("menu-hamburguer");
    const links = document.getElementById("menu-links");
    if (!burguer || !links) return;

    burguer.addEventListener("click", () => {
        const aberto = links.classList.toggle("esta-aberto");
        burguer.setAttribute("aria-expanded", aberto);
    });

    links.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            links.classList.remove("esta-aberto");
            burguer.setAttribute("aria-expanded", "false");
        });
    });
}

function iniciarTypingEfeito() {
    const el = document.getElementById("texto-cargo");
    if (!el || !DADOS.papel || DADOS.papel.length === 0) return;

    let indicePapel = 0;
    let indiceLetra = 0;
    let apagando = false;

    function digitar() {
        const textoAtual = DADOS.papel[indicePapel];

        if (!apagando) {
            el.textContent = textoAtual.substring(0, indiceLetra + 1);
            indiceLetra++;

            if (indiceLetra === textoAtual.length) {
                apagando = true;
                setTimeout(digitar, 1800);
                return;
            }
        } else {
            el.textContent = textoAtual.substring(0, indiceLetra - 1);
            indiceLetra--;

            if (indiceLetra === 0) {
                apagando = false;
                indicePapel = (indicePapel + 1) % DADOS.papel.length;
            }
        }

        setTimeout(digitar, apagando ? 45 : 85);
    }

    digitar();
}

function iniciarFiltrosDeProjetos() {
    const chips = document.querySelectorAll(".filtro-botao");
    const projetos = document.querySelectorAll(".projeto");

    chips.forEach(chip => {
        chip.addEventListener("click", () => {
            chips.forEach(c => c.classList.remove("esta-ativo"));
            chip.classList.add("esta-ativo");
            const filtro = chip.dataset.filter;

            projetos.forEach(p => {
                const tags = p.dataset.tags.split(",");
                const mostra = filtro === "todos" || tags.includes(filtro);
                p.classList.toggle("esta-oculto", !mostra);
            });
        });
    });
}

function iniciarCopiarEmail() {
    const btn = document.getElementById("copiar-email");
    const label = document.getElementById("copiar-email-texto");
    if (!btn || !label) return;

    btn.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(DADOS.email);
            label.textContent = "E-mail copiado!";
        } catch (e) {
            label.textContent = DADOS.email;
        }
        setTimeout(() => { label.textContent = "Copiar e-mail"; }, 2200);
    });
}

function iniciarBotaoTopo() {
    const btn = document.getElementById("voltar-topo");
    if (!btn) return;

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

function iniciarLogAnimado() {
    const linhas = DADOS.projetos
        .slice(-3)
        .map(p => `> deploy ${p.titulo.toLowerCase().replace(/\s+/g, "-")} ${p.versao} ok`);
    const ids = ["linha-log-1", "linha-log-2", "linha-log-3"];

    ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el || !linhas[i]) return;
        setTimeout(() => { el.textContent = linhas[i]; }, 900 + i * 450);
    });
}