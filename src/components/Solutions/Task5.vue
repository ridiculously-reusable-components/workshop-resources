<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Task 5: Dynamically generated form</h1>
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
      <li>
        <strong>Advanced</strong>: Create a Higher-Order Component called <strong>WithDescription</strong> that adds a description field on the side of the input. Replace the Schema Form Components with a modified version of them (with description).
      </li>
    </ol>

    <!-- TASK BEGINS HERE -->
    <SchemaForm
      :schema="schema"
      :value="userData"
      @input="mergeChanges"
    >
      <AppButton buttonType="submit" style="margin-top: 20px">
        Submit
        <AppIcon icon="arrow-right" style="margin-left: 7px;"/>
      </AppButton>
    </SchemaForm>

    <!-- TASK ENDS HERE -->

    <FunctionalComponentWithJSX message=" this is a message from props" class="mb-8"/>
  </div>
</template>

<script>
import SchemaForm from '@/components/Forms/SchemaForm'
import FormSelect from '@/components/Solutions/FormSelect'
import FormText from '@/components/Forms/FormText'
import FormCheckbox from '@/components/Forms/FormCheckbox'
// import WithDescription from '@/components/WithDescription'

const FunctionalComponentWithJSX = ({ props }) => <div class="mt-8">
  Hello, I’m a functional Component and
  <strong>{ props.message }</strong>
</div>

const SCHEMA = {
  firstName: {
    component: FormText,
    label: 'First Name',
    description: 'Only provide one name.'
  },
  lastName: {
    component: FormText,
    label: 'Last Name',
    description: 'Only use latin letters'
  },
  email: {
    component: FormText,
    label: 'Your email',
    required: true,
    config: {
      type: 'email'
    },
    description: 'This field is required'
  },
  isVueFan: {
    component: FormCheckbox,
    label: 'Are you a Vue fan?',
    description: 'But really, are you?'
  },
}

export default {
  components: {
    SchemaForm,
    FunctionalComponentWithJSX
  },
  data () {
    return {
      userData: {}
    }
  },
  computed: {
    schema () {
      return this.userData.isVueFan
        ? {
          ...SCHEMA,
          country: {
            component: FormSelect,
            label: 'Country',
            config: {
              options: ['Canada', 'Poland', 'United States', 'Czech Republic', 'Germany']
            }
          },
        }
        : SCHEMA
    }
  },
  methods: {
    mergeChanges (changes) {
      this.userData = {
        ...this.userData,
        ...changes
      }
    }
  },
  beforeCreate () {
    this.$on('hook:mounted', () => {
      console.log('hi');
    })
  },
}
</script>

<style lang="sass">
.steps
  max-width: 35rem
  text-align: left
  margin: 0 auto 4rem
  line-height: 1.6
</style>
