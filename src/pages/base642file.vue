<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-textarea
          v-model="base64Text"
          label="输入 Base64 编码文本"
          rows="7"
          counter
          outlined
          clearable
          required
          :rules="[v => !!v || '请输入 Base64 编码文本']"
        ></v-textarea>

        <v-text-field
          v-model="fileName"
          label="文件名"
          outlined
          required
          :rules="[v => !!v || '请输入文件名']"
        ></v-text-field>

        <v-btn @click="decodeAndDownload" color="primary">解码并下载文件</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import saveAs from 'file-saver';

const base64Text = ref<string>('');
const fileName = ref<string>('');

const decodeAndDownload = () => {
  if (!base64Text.value || !fileName.value) {
    alert('请填写 Base64 编码文本和文件名');
    return;
  }

  try {
    const decodedData = atob(base64Text.value);
    const byteArray = new Uint8Array(decodedData.length);
    for (let i = 0; i < decodedData.length; i++) {
      byteArray[i] = decodedData.charCodeAt(i);
    }
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });
    saveAs(blob, fileName.value);
  } catch (error) {
    console.error(error);
    alert('解码失败，请检查输入的 Base64 编码文本是否正确');
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
