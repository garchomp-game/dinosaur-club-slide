import { Deck, FlexBox, Box } from 'spectacle';
import Slides from './Slides';

const theme = {
  colors: {
    primary: '#0f4c5c',
    secondary: '#e76f51',
    tertiary: '#ffffff',
    quaternary: '#f4a261',
    quinary: '#2a9d8f'
  },
  fonts: {
    header: '"M PLUS Rounded 1c", "Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"M PLUS Rounded 1c", "Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  fontSizes: {
    h1: '52px',
    h2: '40px',
    h3: '32px',
    text: '22px',
    monospace: '20px'
  }
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <i>恐竜クラブのためのホームページ提案</i>
    </Box>
    <Box padding="1em">
      {/* {slideNumber} / {slideCount} */}
    </Box>
  </FlexBox>
);

function App() {
  return (
    <Deck theme={theme} template={template}>
      {Slides}
    </Deck>
  );
}

export default App;
