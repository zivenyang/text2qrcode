<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-textarea
          v-model="inputText"
          label="输入文本"
          :counter="1000"
          rows="5"
          outlined
          clearable
        ></v-textarea>

        <v-radio-group v-model="mode" row>
          <v-radio
            :label="segmentedLabel"
            :value="SEGMENTED_MODE"
          ></v-radio>
          <v-radio
            :label="lineLabel"
            :value="LINE_MODE"
          ></v-radio>
        </v-radio-group>

        <v-text-field
          v-model.number="segmentSize"
          label="分段大小"
          type="number"
          min="1"
          outlined
          :disabled="mode !== SEGMENTED_MODE"
        ></v-text-field>

        <v-text-field
          v-model.number="lineSize"
          label="行数大小"
          type="number"
          min="1"
          outlined
          :disabled="mode !== LINE_MODE"
        ></v-text-field>

        <v-btn @click="convertText" color="primary">生成二维码</v-btn>
      </v-col>

      <v-col cols="12" md="6">
        <v-row v-if="qrCodes.length > 0">
          <v-col
            v-for="(qrCode, index) in qrCodes"
            :key="index"
            cols="4"
            @click="openQRCodeDialog(index)"
          >
            <v-img
              :src="qrCode"
              :alt="'QR Code ' + (index + 1)"
              class="qr-code-image"
              contain
              tile
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Dialog for QR Code Image -->
    <v-dialog v-model="dialogQRCode" max-width="800">
      <v-carousel v-model="selectedQRIndex" hide-delimiters progress="primary">
        <v-carousel-item v-for="(qrCode, index) in qrCodes" :key="index">
          <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
              <v-img
                :src="qrCode"
                :alt="'QR Code ' + (selectedQRIndex + 1)"
                contain
              ></v-img>
            </v-col>
          </v-row>
          <v-card  elevation="12">
            <v-card-text>第 {{ index + 1 }} 段/行</v-card-text>
            <v-divider></v-divider>
            <v-card-text>{{ qrText[index] }}</v-card-text>
          </v-card>
        </v-carousel-item>
      </v-carousel>

      <!-- Navigation buttons -->
      <v-card-actions class="qr-code-actions">
        <v-btn color="primary" @click="downloadQRCode">下载二维码</v-btn>
      </v-card-actions>
    </v-dialog>

  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import QRCode from 'qrcode';
import saveAs from 'file-saver';
import { v4 as uuidv4 } from 'uuid';

const SEGMENTED_MODE = 'segmented' as const;
const LINE_MODE = 'line' as const;

const inputText = ref<string>('');
const mode = ref<typeof SEGMENTED_MODE>(SEGMENTED_MODE);
const segmentSize = ref<number>(512);
const lineSize = ref<number>(5);
const qrCodes = ref<string[]>([]);
const qrText = ref<string[]>([]);
const selectedQRIndex = ref<number>(0);
const dialogQRCode = ref<boolean>(false);
const dialogImage = ref<boolean>(false);

const segmentedLabel = computed(() => `分段模式 (${segmentSize.value} 字符/段)`);
const lineLabel = computed(() => `分行模式 (${lineSize.value} 行/段)`);

const convertText = async () => {
  qrCodes.value = []; // 清空之前的二维码
  qrText.value = []; // 清空之前的文本
  let segments: string[] = [];

  if (mode.value === SEGMENTED_MODE) {
    segments = segmentText(inputText.value, segmentSize.value);
  } else if (mode.value === LINE_MODE) {
    segments = lineText(inputText.value, lineSize.value);
  }

  for (const segment of segments) {
    const qrCode = await QRCode.toDataURL(segment);
    qrCodes.value.push(qrCode);
    qrText.value.push(segment);
  }
};

const segmentText = (text: string, segmentSize: number): string[] => {
  const segments: string[] = [];
  for (let i = 0; i < text.length; i += segmentSize) {
    segments.push(text.substring(i, i + segmentSize));
  }
  return segments;
};

const lineText = (text: string, lineSize: number): string[] => {
  const lines: string[] = text.split('\n');
  const segmentedLines: string[] = [];
  for (let i = 0; i < lines.length; i += lineSize) {
    segmentedLines.push(lines.slice(i, i + lineSize).join('\n'));
  }
  return segmentedLines;
};

const openQRCodeDialog = (index: number) => {
  selectedQRIndex.value = index;
  dialogQRCode.value = true;
};

const navigateQRCode = (direction: number) => {
  const newIndex = selectedQRIndex.value + direction;
  if (newIndex >= 0 && newIndex < qrCodes.value.length) {
    selectedQRIndex.value = newIndex;
  }
};

const downloadQRCode = () => {
  saveAs(qrCodes.value[selectedQRIndex.value], `QR_Code_${selectedQRIndex.value + 1}.png`);
};
</script>

<style scoped>
.qr-code-image {
  cursor: pointer;
}

.qr-code-image-dialog {
  max-width: 100%;
  max-height: 80vh;
  cursor: zoom-in;
}

.qr-code-info {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0,0,0, 0.9);
  z-index: 1000; /* Ensure the info card appears above the QR code */
}

.qr-code-actions {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
