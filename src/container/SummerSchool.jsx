import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'

function SummerSchool() {
    return (
        <Container color="nord6">

            <div className='text-nord1 text-md font-semibold pt-2 text-lg'>
                <SectionTitle title={"Summer School"} />

                <div className="w-100 flex flex-col items-center justify-center">
                    <p className=" text-nord1 text-md font-semibold">O Summer School SIBRAGEC+SBTIC 2023 tem como objetivo oferecer a oportunidade aos alunos de mestrado e doutorado na área de Gestão e Economia da Construção e Tecnologia da Informação e Comunicação da Construção de apresentarem os seus projetos e resultados parciais em sessões específicas, com a participação de um Painel de Pesquisadores Seniores que buscará contribuir para o desenvolvimento da pesquisa dos alunos.</p>
                </div>
                <br />
                <div>
                    <p> Cada aluno selecionado fará uma apresentação no formato 3MT (3 minute theses), seguido de discussões sobre o trabalho pelo Painel de Pesquisadores Seniores e pares.</p>
                </div>
                <br />
                <div>
                    <p> O Summer School oferece uma oportunidade única para o aluno: </p>
                    <ul>
                        <li>receber feedback sobre a sua pesquisa;</li>
                        <li>se engajar em discussões com pesquisadores seniores na área de gestão das construções, e</li>
                        <li>conhecer pesquisadores estudantes que trabalham em tópicos similares, iniciando assim o desenvolvimento de novos contatos que podem conduzir a colaborações de pesquisa futura.</li>
                    </ul>
                </div>
                <br />
                <div>
                    <p>
                        O projeto deverá ser apresentado conforme modelo disponibilizado no link, sendo constituído em um resumo estendido estruturado: problema, objetivo, trabalhos correlatos, método, resultados parciais, contribuição pretendida, referências (1800 palavras no total, incluindo referências).
                    </p>
                    <p>
                        A submissão deverá ser realizada exclusivamente por e-mail:  <a
                            href="mailto:gt.tic@antac.org.br"
                            className="text-orange-500 text-underline"
                        >
                            gt.tic@antac.org.br
                        </a>
                    </p>
                </div>
                <br />
                <div>
                    <h3 className='text-2xl'>Calendário:</h3>
                    <ul className='flex flex-col gap-4 pt-4'>
                        <li>- Submissões: até 10/05/23 </li>
                        <li>- Aceite final das propostas: até 10/06/23</li>
                        <li>- Envio das instruções para elaboração da 3MT: 15/07/23</li>
                        <li>- Recebimento da 3MT: 25/10/2023</li>
                        <li>- Evento: 8/11/2023</li>
                    </ul>
                </div>
            </div>
        </Container>

    )
}

export default SummerSchool