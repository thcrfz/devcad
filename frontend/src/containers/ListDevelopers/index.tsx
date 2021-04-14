import { get } from "lodash";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DEVELOPERS_URL } from "../../config/app-config";
import { DeveloperData } from "../../domain/posts/post";
import { fetchDeleteDeveloperJson } from "../../utils/fetch-delete-developer";

export type DeveloperProps = {
  developers: DeveloperData[];
};

export default function ListDeveloper({ developers }: DeveloperProps) {
  const [developer, setDeveloper] = useState([]);

  useEffect(() => {
    function getData() {
      setDeveloper(developers);
    }
    getData();
  }, [developers]);

  async function handleDelete(e, id, index) {
    e.persist();
    await fetchDeleteDeveloperJson(`${DEVELOPERS_URL}\\${id}`);
    const newDevs = [...developers];
    newDevs.splice(index, 1);
    setDeveloper(newDevs);
  }
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <td align="center">Nome</td>
              <td align="center">Email</td>
              <td align="center">Idade</td>
              <td align="center">Url</td>
              <td align="center">Tecnologias</td>
              <td align="center">Editar</td>
              <td align="center">Excluir</td>
            </tr>
          </thead>
          <tbody>
            {!developer ? (
              <div>Faça login</div>
            ) : (
              developer.map((dev, index) => (
                <tr key={dev.id}>
                  <td align="center">{dev.name}</td>
                  <td align="center">{dev.email}</td>
                  <td align="center">{dev.age}</td>
                  <td align="center">{dev.url}</td>
                  <td align="center">
                    {get(dev, "languageModels[0].name", false) ? (
                      dev.languageModels[0].name
                    ) : (
                      <span>Sem linguagem</span>
                    )}
                  </td>
                  <td align="center">
                    <Link href={`/${dev.id}`}>
                      editar
                    </Link>
                  </td>
                  <td align="center">
                    <button onClick={(e) => handleDelete(e, dev.id, index)}>
                      deletar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
