import * as React from "react";
const GTBankLogo = (props) => (
  <svg
    width={83}
    height={84}
    viewBox="0 0 83 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect y={0.5} width={83} height={83} rx={41.5} fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_2921_69663"
          transform="matrix(0.00449039 0 0 0.00476964 0.00486655 -0.00817199)"
        />
      </pattern>
      <image
        id="image0_2921_69663"
        width={224}
        height={225}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAh1BMVEXgSCb////hTS3gSinfQx3eMgDeMADmeWb65eLmd2XfPhP++/rfQBnkaFLuqJ3eNwDqj4HfOw7uqqD88e/xurHiWT7ws6rqk4X0yMLjX0b76ufpi3z1zcfiVjn43NjmdGD319LsnpLjZEzrmIv0ycLxt6/ngG7jXUPywLnlbln20s3toZfhUTJXUzLOAAAHeklEQVR4nO2d61riMBCGi5tGLJVQkYNFTrIqIvd/fQsCnUk7sZNq1yc+8/1s2iRvMplMDmK0v/rdiv5Ev1wCGLoEMHQJYOgSwNAlgKFLAEOXAIYuAQxdAhi6BDB0CWDoEsDQJYChSwBDlwC2LBM3k+IW8MOAZthppmsu4U8DdhsC3gjgWQLYrgRQAOskgO1KAAWwTgLYrgRQAOskgO1KAAWwTgLYrgRQAOskgO1KAAWwTgLYrgRQAOskgO1KAAWwTgLYrgRQAOskgO1KAAWwTgLYrgRQAOskgO1KAAWwTgLYrgRQAOv004B5Q8BQ/qxALa+bac8t4af/8kU1FLuAnwZsXQIYugQwdAlg6BLA0CWAoUsAQ5cAhi4BDF0CGLoEMHQJYOgSwNAlgKFLAEOXAIYuAQxdAhi6BDB0CWDoEkBSKsnMx4/XGpOkdorvFR6VnHPKEvJ2Twol8W//IDUATI1Z9reLfDgc5ovH8SyKs6JodVunN1xNlenl3WP3I6fp3bUxdmtFykSD+1U+7A2H3d34xWT+jN6AqZ7tShfj8vHr5UeF4/prdDHkZfb3dtpqZhHqm5Wdvp2blgGV3vSoWi+eToQxmWq9WVRRmftqskZlRatq+rOu1Ok7AZOR6/rjJGUCTrNzXumI+oVmqH/6RH6fp35m6gVoXpz1HnABx8m5/rdkcgGoaL5OZ5iRdfsOwGzgrjcb8NzVak4nA6Azp4WXlXoAJu7+8wBcnizM9Qvil8rHZU+G9O7Th3xAtf+s3mzAqxMf4V8woLpGz7aD5c0GOxwPPg9Abd0f720Hbw9PN5PxrmcB1vGdCNQIP9ptrpcvk/GqB4CosDwyqVKJRsj3Hl3IBkxnuE4bnaXHsOQQZ+jX9aoYWukANIPefIGHH++ZR8gqnx9ilFNOT/3uaRJRS2jJy+SeIcKkBUCNBk0e4RKOwdbkcgs+BWkA1MXD02tXkFcX/eOBQ05nmGmRDlN//Ld4uOYTcgFxBw5NZSqiJic0Hkt+L7mDzCJqWgNLH8KnyK4X/ICGC2gWUKc5b6p1A2oIF+6o4YRczBilxzAwU+IrWmwT7XxeJ0JOQDwHkraWjYv0JWpM1PEzNiETMN1Anbjm4QREme3IzJC5oNA8UjfF42e2H2UCIrfH9tFOQORCNmRP6CI9x4BRUjznD0ImIPKIb9xg1wkYwxAckZlBSPFogUAteuxwjQmIohh21m7AmsyQj7FNEZkue57gASoIQ1ds43ABInffJTNDY/TdAkED5fZ7//oseS9yvvhtlZRUKdEJCB30SAIibzmxxmi2LRJevhcwuy8XWV0N3JWtxgWYTorntMNCpdkcCUwfE+48wQNEtnGOyUxlO6HPBUTmUGmUEyDEZPYfeib9IuGdOwiZgDC6H05FIlfvDQj9QMeUBtaCtstO1jVN0xwQgqTTei7KnhsDok/paRBZh+1LkPdhz/Q8QDRznUtEduYNWBnQZUCwlxJg3ehtDggu5ZxxWtmf4QOCLxzUAT79f8Bzlaw9hV8FeClxtL0/6BmGy/8w0f8xBudFPY/SMBT5gOBFN7QXhVZzetFxa170yTUz8aeJO/c3p9Iqs+7ly0+a0yXvefD664CoH+hIBgapvbBFTUP3PSEmIEy9tl9oAogc8JYGRDZsx6IwetlLemYsCm1qhxBNAJEDppcmzlgO2e7ym1cTYBtTq9EbAcJyaRhHhNAO3ta1HpxTH1LiAaIiS5sIDQDxgpfsQQUHT3YXo9nqm1f0+CzryyaK60lbmoEuticYRzN/JuaWBWp0a3g3AkRDiV4UoBbAj9GGPr1SpsTdVYOJ0NrpawSIPspJU8ugBXBzflaYU0xA5LkvC6baMt0bv2+QGbm3gmbKKWrOGHwMe2uPC4isozNF9t8IEO170se1eOsbAaIjG/4hL3frHm2Mdl7AdzcDxNsBE2zx6TlnFPvCca6BhfKUf0DIBcQ22rm5HHkp0yDYtvbgD6GR/hhmKs3iZLY71Ry1W3H8hA9N2T9Z5XH4guzjMP8+6DiOtXobQAznAWgdNnYWs71J5svNtgtvKkjOk2PGKovgmyHfQvmApVP1Xp6XNg59AKv7AaU3UdTZ6a2vtJ6jPuXvGfoAopMPWj6ApQP/KiDuworoueXLgGllk+ILgOq1BjD55E7OE38Eet2TMevvA4ySGZ1L8abe0i8cllBeV518bjqZjavMo9hb9+fMJmQu8KZ+JF/o9NlhqDdglL057icdNKwsQT8HjLIldWkIvan7RHpn5nmh0u+2oYrXFGJ3O9nrimerOwZMrbn1Q7ll59mo0olb5XFF5kO+F2ITfXu3KiB73d3z5DaOM8pvJ/2LXAcJmZltC3fana5H2n5RmT/rXVFY/neS+N00PMr/SrNKzGGKnz88zJWOjcnc9zfh7NCZ2fF+Uzp/eN1nmr60fSwsGp0KI5uxTo1v3Xv8QOSX8/L5Ncqy5M8KQpcAhi4BDF0CGLoEMHQJYOgSwNAlgKFLAEOXAIYuAQxdAhi6BDB0CWDoEsDQJYChSwBDlwCGLgEMXQIYuvZXv1v/AEo8fdHyNVlDAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);
export default GTBankLogo;
