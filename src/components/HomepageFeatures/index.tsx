import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Conectando Pontos',
    Svg: require('@site/static/img/hamburger-rafiki.svg').default,
    description: (
      <>
          Reunimos a equipe, compartilhamos histórias e, de repente, os desafios
          do negócio ficaram claros como o dia. Esse método uniu todos de um
          jeito simples e, ao trocar experiências, vimos o cenário completo. Com
          essa clareza, acertar nas soluções foi um pulo!
      </>
    ),
  },
  {
    title: 'Implementação Intuitiva',
    Svg: require('@site/static/img/chef-bro.svg').default,
    description: (
      <>
          O DDD entrou em cena e revolucionou nosso projeto desde o começo.
          Ele guiou a equipe pelos meandros do negócio com uma abordagem
          que todos pegaram rápido. Isso deixou a implementação das soluções
          mais afiada e certeira.
      </>
    ),
  },
  {
    title: 'Colaboração Enriquecida pelo DDD',
    Svg: require('@site/static/img/hamburger-pana.svg').default,
    description: (
      <>
          Com o DDD, nossa comunicação de equipe mudou da água para o vinho. Criamos uma
          linguagem comum que deixou todos afiados nos objetivos do negócio. Menos ruído,
          mais clareza. Agora, ajustes e mudanças rolam fácil, sem quebrar a harmonia do
          projeto.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
