import axios from 'axios'
import { ref, watch } from '@vue/composition-api'

export default function (url, delay) {
  const data = ref({})
  const isPending = ref(true)
  const error = ref(null)

  const fetch = () => {
    isPending.value = true
    axios.get(url.value)
      .then(response => {
        error.value = null
        data.value = response.data
        isPending.value = false
      })
      .catch(error => {
        error.value = error
        isPending.value = false
      })
  }

  watch(url, () => {
    setTimeout(fetch, delay)
  })

  return {
    isPending,
    data,
    refresh: fetch,
    error,
  }
}

// SETUP FUNCTION SOLUTION FOR TASK4 
// setup () {
//   const breed = ref('collie/border')
//   const url = computed(() => `https://dog.ceo/api/breed/${breed.value}/images/random`)
//
//   const {
//     data,
//     error,
//     refresh,
//     isPending
//   } = useFetchData(url, 500)
//
//   return {
//     breed,
//     data,
//     error,
//     refresh,
//     isPending
//   }
// },
