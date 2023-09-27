type propTypes = {
  title: string
}


const Button = ({title} : propTypes) => {
  return (
    <div>
      <button className="bg-[#1DBBB4] w-[154px] h-[43px] rounded-xl">
        <a className="place-self-center">{title}</a>
      </button>
    </div>
  )
}

export default Button
