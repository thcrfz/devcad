import Link from "next/link";

export type FormProps = {
  handleSubmit: (e) => void;
  handleLang: (e) => void;
  developers;
  name: string;
  setName;
  email: string;
  setEmail;
  age: string;
  setAge;
  url: string;
  setUrl;
  lang: string;
  setLang;
};

export default function Form({
  handleSubmit,
  handleLang,
  developers,
  name,
  setName,
  email,
  setEmail,
  age,
  setAge,
  url,
  setUrl,
  lang,
  setLang,
}: FormProps) {
  return (
    <section>
      <div>
        {!developers ? (
          <h4>Cadastrar desenvolvedor</h4>
        ) : (
          <span>
            <Link href="/">
              voltar
            </Link>
            <h4>Editar desenvolvedor</h4>
          </span>
        )}

        <form onSubmit={handleLang}>
          <div>
            <label id="demo-simple-select-label">Tecnologias</label>
            <select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              onChange={(event) => setLang(event.target.value)}
            >
              <item value="Angular">Angular</item>
              <item value="C#">C#</item>
              <item value="Ionic">Ionic</item>
              <item value="Javascript">Javascript</item>
              <item value="Laravel">Laravel</item>
              <item value="Mensageria">Mensageria</item>
              <item value="NodeJs">NodeJs</item>
              <item value="React">React</item>
            </select>
          </div>

          <button
            type="submit"
          >
            Cadastrar tecnologia
          </button>
        </form>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              id="nome"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="my-input">Email address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="age">Idade</label>
            <input
              id="age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="linkedin">URL do linkedin</label>
            <input
              id="linkedin"
              type="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
            />
          </div>
          <button
            type="submit"
          >
            Cadastrar desenvolvedor
          </button>
        </form>
      </div>
    </section>
  );
}
