import cn from "classnames";

import WordCard from "../Components/WordCard";
import styles from "./App.module.css";

import type { FC } from "react";

interface AppProps {
  className?: string;
}

const App: FC<AppProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <div className={cn(styles.wrapper, className)} {...restProps}>
      <WordCard />
    </div>
  );
};

export default App;
