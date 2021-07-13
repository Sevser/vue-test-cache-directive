<template>
  <b-container>
    <b-jumbotron lead="Пользовательская директива" class="py-3">
      <p>
        Реализуйте директиву, которая будет сохранять значение
        <code>input</code>.
      </p>
      <b-btn
        variant="primary"
        href="https://app.simplenote.com/publish/d2gcLf"
        target="_blank"
      >
        Подробнее
      </b-btn>
    </b-jumbotron>

    <b-form-group
      :description="`Длина ${inputValue.length}`"
      label="Тестовое поле"
    >
      <b-form-input
        v-cache="textInputCacheParameters"
        v-model="inputValue"
        @change="() => {}"
      />
    </b-form-group>
    <b-form-checkbox
      id="checkbox-1"
      v-model="inputCheckBox"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
      v-cache="checkBoxInputCacheParameters"
    >
      I accept the terms and use
    </b-form-checkbox>
    <b-form-datepicker
      v-cache="datePickerInputCacheParameters"
      id="example-datepicker"
      v-model="inputDate"
      class="mt-2"
    />
    <b-form-radio-group
      id="radio-slots"
      class="mt-2"
      v-model="inputRadioButton"
      :options="optionsRadioButton"
      v-cache="radioButtonInputCacheParameters"
      name="radio-options-slots"
    >
    </b-form-radio-group>
    <b-form-textarea
      class="mt-2"
      v-cache="textAreaCacheParameters"
      id="textarea"
      v-model="inputTextArea"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <b-form-select
      class="mt-2"
      v-cache="inputSelectCacheParameters"
      v-model="inputSelect"
      :options="options"
    />
  </b-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      textInputCacheParameters: {
        id: "textInputOne",
        debounce: 300,
        updateEvent: "update",
      },
      checkBoxInputCacheParameters: {
        id: "checkBoxOne",
      },
      datePickerInputCacheParameters: {
        id: "datePickerOne",
      },
      radioButtonInputCacheParameters: {
        id: "radioButtonOne",
      },
      textAreaCacheParameters: {
        id: "textAreaOne",
        debounce: 800,
        updateEvent: "update",
      },
      inputSelectCacheParameters: {
        id: "inputSelectOne",
        updateEvent: "input",
      },
      inputValue: "",
      inputCheckBox: false,
      inputDate: null,
      inputRadioButton: null,
      optionsRadioButton: ["A", "B", "C"],
      inputTextArea: "",
      inputSelect: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "one" },
        { value: "b", text: "two" },
        { value: "c", text: "three" },
        { value: "d", text: "four" },
      ],
    };
  },
};
</script>
