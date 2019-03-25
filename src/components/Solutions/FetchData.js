import axios from 'axios'

export default {
  props: {
    url: {
      type: String,
      required: true
    },
    params: {
      type: Object,
      default: () => {}
    },
    delay: {
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      data: null,
      resolved: false,
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
      this.resolved = false
      axios.get(this.url, this.params)
        .then(response => {
          this.error = null
          this.data = response.data
          this.resolved = true
        })
        .catch(error => {
          this.error = error
          this.resolved = true
        })
    }
  },
  render () {
    if (!this.resolved) {
      return this.$scopedSlots.loading({
        isPending: !this.resolved
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
