import React from "react";

type PropsType = {
  name: string
  callBack: () => void
}

export function SuperButton(props: PropsType) {
  const onClickHandler = () => {
    props.callBack()
  }

  return (
    <button onClick={onClickHandler}>{props.name}</button>
  )
}
