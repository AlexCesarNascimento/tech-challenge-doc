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
    title: 'Fortalecendo laços para a saúde',
    Svg: require('@site/static/img/prescription-bro.svg').default,
    description: (
      <>
        Na HealthMed, cada consulta é uma oportunidade de ouvir e entender. Nossa equipe dedica tempo para conhecer cada paciente, discutindo suas necessidades e oferecendo cuidados personalizados. Esse método torna o tratamento mais eficaz e a experiência do paciente mais positiva. Com HealthMed, você recebe atenção e cuidado que fazem a diferença.
      </>
    ),
  },
  {
    title: 'Implementação Intuitiva',
    Svg: require('@site/static/img/call-bro.svg').default,
    description: (
      <>
        Na HealthMed, acreditamos no poder da conexão. Nossos pacientes e profissionais de saúde utilizam a telemedicina para se comunicar, compartilhar histórias e resolver desafios. Através de uma simples chamada de vídeo, a clareza no diagnóstico e no tratamento é alcançada. Nossa tecnologia une pessoas, tornando o cuidado mais acessível e eficaz. Com HealthMed, a saúde está sempre ao seu alcance.
      </>
    ),
  },
  {
    title: 'Atendimento Personalizado',
    Svg: require('@site/static/img/Medicine-bro.svg').default,
    description: (
      <>
        Reunimos nossa equipe, trocamos experiências e, de repente, os desafios da saúde ficaram claros. Com essa união simples, vimos o cenário completo e as soluções ficaram óbvias. No HealthMed, a clareza vem da colaboração e isso transforma o cuidado com nossos pacientes.
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
