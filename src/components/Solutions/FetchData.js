import axios from 'axios'

export default {
  props: {
    url: {
      type: String,
      required: true
    },
    delay: {
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      data: null,
      isPending: true,
      error: null
    }
  },
  watch: {
    url: {
      handler () {
        setTimeout(this.fetch, this.delay);
      },
      immediate: true
    }
  },
  methods: {
    fetch () {
      this.isPending = true
      axios.get(this.url)
        .then(response => {
          this.error = null
          this.data = response.data
          this.isPending = false
        })
        .catch(error => {
          this.error = error
          this.isPending = false
        })
    }
  },
  render () {
    if (this.isPending) {
      return this.$scopedSlots.loading({
        isPending: this.isPending
      })
    }
    if (this.error) {
      return this.$scopedSlots.error({
        refresh: this.fetch,
        error: this.error
      })
    }

    return this.$scopedSlots.default({
      data: this.data,
      refresh: this.fetch
    })
  }
}
