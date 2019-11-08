export default function (Comp) {
  const CompWithDesc = ({ props, listeners, attrs, data }) => <div class="flex">
    <div class="pr-2 flex-1">
      <Comp {...{ ...props, ...listeners, ...attrs, ...data }} />
    </div>
    <div class="pl-2 text-gray-600 flex-1 mb-3 mt-8">
      { props.description }
    </div>
  </div>

  return CompWithDesc
}
