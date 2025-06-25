
# 🌐 Website Oficial do Time Visão

Bem-vindo ao repositório do site oficial do **Time Visão**, grupo de pesquisa da Universidade de Pernambuco (UPE) com atuação em **Visão Computacional**, **Inteligência Artificial** e áreas correlatas.

Este repositório hospeda o código-fonte do nosso website institucional:  
🔗 [https://timevisaoupe.github.io](https://timevisaoupe.github.io)

---

## 📌 Sobre o Website

O site foi desenvolvido para apresentar os projetos, publicações, eventos e os pesquisadores que fazem parte do grupo. Está estruturado com as seguintes seções principais:

- **Página Inicial**
- **Pesquisadores**
- **Projetos**
- **Publicações**
- **Novidades**
- **Página individual de cada pesquisador**

---

## 👥 Páginas de Pesquisadores

Cada pesquisador do Time Visão possui uma página pessoal no site. Essa página funciona como um mini-portfólio e pode conter:

- Nome, e-mail e foto
- Links para LinkedIn, Lattes e Google Scholar
- Lista de projetos
- Bio e demais informações relevantes

### 📁 Localização

O conteúdo das páginas dos pesquisadores está em:

```
_pages/paginas/[seu_nome]/[seu_nome].html
```

A imagem de perfil correspondente deve estar em:

```
assets/paginas/[seu_nome]/foto.jpg
```

---

## ✏️ Como Atualizar Sua Página Pessoal

### 1. Obter Acesso
Você precisa ter acesso como colaborador à organização do GitHub. Solicite ao seu orientador ou administrador do grupo, caso ainda não tenha.

### 2. Atualizar Informações
Edite seu arquivo `.html` diretamente no GitHub (usando Markdown). Um modelo inicial já será criado quando seu nome for adicionado ao arquivo `researchers.yaml`.

Você pode incluir:

- Informações de contato (e-mail, LinkedIn, Lattes, Scholar)
- Descrição de projetos
- Bio acadêmica
- Links para sites pessoais
- Sessões opcionais como blog, galeria ou novidades

### 3. Atualizar a Foto
Para alterar sua foto de perfil:

1. Navegue até `assets/paginas/seu_nome/`
2. Substitua o arquivo `foto.jpg` por sua nova foto (mesmo nome)
3. Recomenda-se usar uma imagem quadrada, clara e com boa resolução

---

## 🧑‍💻 Como Atualizar Pesquisadores no Site

Os pesquisadores listados na página principal são definidos no arquivo:

```
_data/researchers.yaml
```

Cada entrada deve conter os seguintes campos:

```yaml
- name: Nome Completo
  image: /assets/paginas/seu_nome/foto.jpg
  url: /paginas/seu_nome/seu_nome.html
  bio: (opcional)
  area: (opcional)
```

Exemplo:

```yaml
- name: Agostinho Freire
  image: /assets/paginas/agostinho_freire/foto.jpg
  url: /paginas/agostinho_freire/agostinho_freire.html
  bio: Pesquisador no campo de IA distribuída.
  area: Aprendizado Federado e Visão Computacional
```

---

## 📚 Como Atualizar as Publicações

As publicações são carregadas a partir de arquivos `.bib` para cada pesquisador, armazenados em:

```
assets/bibs/
```

Para adicionar ou atualizar suas publicações:

1. Crie/edite o arquivo `seu_nome.bib`
2. Use o formato BibTeX padrão
3. Certifique-se de manter os campos `author`, `title`, `year`, etc.

---

## 🚨 Regras de Uso e Conduta

- **Finalidade Acadêmica**: O site deve ser usado apenas para fins de divulgação acadêmica e científica.
- **Comportamento Ético**: Não é permitido conteúdo ofensivo, discriminatório ou fora do escopo institucional.
- **Manutenção e Curadoria**: O Time Visão reserva-se o direito de revisar, editar ou remover conteúdos que não estejam em conformidade.

---

## 🛠️ Deploy

O site é hospedado via **GitHub Pages**. Toda atualização feita no branch `main` será automaticamente publicada.  
Você pode visualizar o status do deploy em:  
[https://github.com/Timevisaoupe/timevisaoupe.github.io/actions](https://github.com/Timevisaoupe/timevisaoupe.github.io/actions)

---

## 🤝 Suporte

Em caso de dúvidas ou problemas com o repositório, entre em contato com os mantenedores do Time Visão ou envie uma mensagem no grupo do WhatsApp do time.

---

Obrigado por contribuir com o Time Visão 🚀  
_Unindo pesquisa, inovação e impacto social._
