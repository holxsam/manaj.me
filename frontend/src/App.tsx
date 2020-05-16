import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { themeState } from "./recoil/ThemeState";

import { useTheme } from "emotion-theming";
import styled from "@emotion/styled";

const Button = styled.button`
  /* color: ${(props: any) => props.theme.colors.secondary}; */
  background-color: ${(props: any) => props.theme.colors.primary};
  padding: 1rem;

  display: flex;
`;

const AppContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${(props: any) => props.theme.colors.background};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainSection = styled.main`
  background-color: ${(props: any) => props.theme.colors.surface};

  padding: 1rem;
  width: 40%;

  p {
    color: ${(props: any) => props.theme.colors.onSecondary};
  }

  a {
    color: ${(props: any) => props.theme.colors.secondary};
    font-weight: bold;
  }
`;

const App = ({ ...props }) => {
  const [themeToggle, toggleTheme] = useRecoilState(themeState);
  const theme = useTheme();

  useEffect(() => {
    console.log("UE1");
  }, [theme]);
  console.log("hell fro mapp");

  return (
    <AppContainer>
      <header className="App-header">
        <Button
          onClick={() => {
            toggleTheme(!themeToggle);
          }}
        >
          toggle theme
        </Button>
      </header>

      <MainSection>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          ducimus, aliquam consequatur corporis delectus nesciunt quasi vel
          voluptatum rerum mollitia doloremque excepturi accusantium in
          perferendis. Consequatur nostrum vero perferendis blanditiis cumque
          praesentium autem illo? Blanditiis sunt reprehenderit quae distinctio,
          suscipit earum ipsa, illo quaerat temporibus ipsum, tempore odio id
          accusamus ullam iure. Similique, molestias consectetur illo ullam
          libero voluptas consequatur nisi maiores, expedita, autem deleniti
          dolorem iusto mollitia! Deleniti, in dolorum qui nesciunt repellendus
          aperiam minus magni soluta pariatur, molestiae dolor quisquam nihil,
          dicta veritatis incidunt suscipit blanditiis! Optio corporis suscipit
          voluptatibus nulla, quidem tenetur excepturi iusto provident. Ad,
          vitae.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </MainSection>
    </AppContainer>
  );
};

export default App;
