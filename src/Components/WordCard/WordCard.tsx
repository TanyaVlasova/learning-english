import { useCallback, useState } from "react";
import cn from "classnames";

import { shuffle } from "../../helpers";
import { dictionary } from "../../data";
import styles from "./WordCard.module.css";

import type { FC } from "react";
import type { Word } from "../../data";

interface WordProps {
  className?: string;
}

const shuffleDictionary = shuffle<Word>(dictionary);

const WordCard: FC<WordProps> = (props) => {
  const { className, ...restProps } = props;
  const [translate, setTranslate] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleNext = useCallback(() => {
    if (translate) setCounter((prev) => prev + 1);

    setTranslate((prev) => !prev);
  }, [translate]);

  const handleRestart = useCallback(() => {
    setCounter(0);
  }, []);

  return (
    <div className={cn(styles.wrapper, className)} {...restProps}>
      {shuffleDictionary[counter] ? (
        <>
          <div className={styles.word}>{shuffleDictionary[counter].word}</div>
          {translate && (
            <div className={styles.translation}>
              - {shuffleDictionary[counter].translation} -
            </div>
          )}
          <button
            className={cn(styles.button, styles.next)}
            onClick={handleNext}
          >
            ᐳ
          </button>
        </>
      ) : (
        <>
          <div className={styles.end}>Слова закончились</div>
          <button
            className={cn(styles.button, styles.restart)}
            onClick={handleRestart}
          >
            Начать заново
          </button>
        </>
      )}
    </div>
  );
};

export default WordCard;
