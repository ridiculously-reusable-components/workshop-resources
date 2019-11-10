export default function (Comp) {
  const CompWithDesc = ({ props, listeners, attrs, data }) => <div class="flex">
    Hi
  </div>

  return CompWithDesc
}


function WithMessage (Component) {
  const ModifiedComponent = ({ props }) => <div>
    <Component { ...props } />
    With added message { props.message }
  </div>

  return ModifiedComponent
}