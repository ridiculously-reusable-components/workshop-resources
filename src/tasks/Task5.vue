<template>
  <div>
    <h1>Task 5: Dynamically generated form</h1>
    <ol class="steps">
      <li>
        Create a FormSelect component that uses the AppSelect component or a regular select element that accepts an array of options.
      </li>
      <li>
        Add a Country field to the schema that uses the newly created FormSelect and provide a few countries to select from.
      </li>
      <li>
        <strong>Advanced</strong>: Create a component that allows to pick a date (<strong>without using input type="date"</strong>). It can be a composition/wrapper around an open-source datepicker like "<strong>vuejs-datepicker</strong>", or a combination of 3 regular select elements filled with days, months and years.
      </li>
      <li>
        Add the component directly to the <strong>Schema</strong> rather than registering it inside <strong>SchemaForm.vue</strong>
      </li>
      <li>
        <strong>Advanced</strong>: If the user checks the <strong>isVueFan</strong> checkbox, extend the schema with an additional text input that asks for feedback.
      </li>
    </ol>

    <!-- TASK BEGINS HERE -->
    <SchemaForm
      :schema="schema"
      :value="userData"
      @input="mergeChanges"
    >
      <AppButton buttonType="submit">
        Submit
        <AppIcon icon="arrow-right" style="margin-left: 7px;"/>
      </AppButton>
    </SchemaForm>

    <!-- TASK ENDS HERE -->
  </div>
</template>

<script>
import SchemaForm from '@/components/Forms/SchemaForm'

const SCHEMA = {
  firstName: {
    component: 'FormText',
    label: 'First Name',
  },
  lastName: {
    component: 'FormText',
    label: 'Last Name',
  },
  email: {
    component: 'FormText',
    label: 'Your email',
    required: true,
    config: {
      type: 'email'
    }
  },
  isVueFan: {
    component: 'FormCheckbox',
    label: 'Are you a Vue fan?'
  }
}

export default {
  components: {
    SchemaForm
  },
  data () {
    return {
      userData: {}
    }
  },
  computed: {
    schema () {
      return SCHEMA
    }
  },
  methods: {
    mergeChanges (changes) {
      this.userData = {
        ...this.userData,
        ...changes
      }
    }
  }
}
</script>

<style lang="sass">
.steps
  max-width: 35rem
  text-align: left
  margin: 0 auto 4rem
  line-height: 1.6
</style>
