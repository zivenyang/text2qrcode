<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-textarea v-model="inputText" label="输入文本"></v-textarea>
        <v-select v-model="lineSize" :items="lineSizes" label="行数大小"></v-select>
        <v-btn @click="convertText" color="primary">转换为二维码</v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-row v-for="(qrCode, index) in qrCodes" :key="index">
          <v-col cols="12" class="text-center">
            <img :src="qrCode" alt="QR Code" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import QRCode from 'qrcode';

export default {
  data() {
    return {
      inputText: '',
      lineSizes: [5, 10, 15], // 可以根据需求修改
      lineSize: 5,
      qrCodes: [],
    };
  },
  methods: {
    async convertText() {
      this.qrCodes = []; // 清空之前的二维码
      const lines = this.lineText(this.inputText, this.lineSize);
      for (const line of lines) {
        const qrCode = await QRCode.toDataURL(line);
        this.qrCodes.push(qrCode);
      }
    },
    lineText(text, lineSize) {
      const lines = text.split('\n');
      const segmentedLines = [];
      for (let i = 0; i < lines.length; i += lineSize) {
        segmentedLines.push(lines.slice(i, i + lineSize).join('\n'));
      }
      return segmentedLines;
    },
  },
};
</script>
