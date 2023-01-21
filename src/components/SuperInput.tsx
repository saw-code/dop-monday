import React, {ChangeEvent} from "react";

type PropsType = {
  setNewTitle: (newTitle: string)=> void
  newTitle: string
}

export const SuperInput = (props: PropsType) => {

  const onChangeHandler = (eventValue: ChangeEvent<HTMLInputElement>) => {
    props.setNewTitle(eventValue.currentTarget.value)
  }

  return (
    <div>
      <input value={props.newTitle} onChange={onChangeHandler}/>
    </div>
  )
}
