<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-textarea v-model="inputText" label="输入文本"></v-textarea>
        <v-select v-model="segmentSize" :items="segmentSizes" label="段落大小"></v-select>
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
      segmentSizes: [64, 128, 512, 1024, 2048], // 可以根据需求修改
      segmentSize: 512,
      qrCodes: [],
    };
  },
  methods: {
    async convertText() {
      this.qrCodes = []; // 清空之前的二维码
      const segments = this.segmentText(this.inputText, this.segmentSize);
      for (const segment of segments) {
        const qrCode = await QRCode.toDataURL(segment);
        this.qrCodes.push(qrCode);
      }
    },
    segmentText(text, segmentSize) {
      const segments = [];
      for (let i = 0; i < text.length; i += segmentSize) {
        segments.push(text.substring(i, i + segmentSize));
      }
      return segments;
    },
  },
};
</script>
