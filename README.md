
## Umi@3.4
### Build
1. 第一次：46.66s
2. 第二次：36.30s
3. 第三次：33.77s
4. 第四次：33.60s


### Dev
1. 启动：1.34m
2. 首次 rebuild：2.01s
3. A 文件首次变更 rebuild：4.47s
4. A 文件二次变更 rebuild：1.47s
5. A 文件三次变更 rebuild：1.47s
6. B 文件首次变更 rebuild：4.06s
7. B 文件二次变更 rebuild：2.33s
8. B 文件三次变更 rebuild：1.58s

##Umi 升级变更
1. package.json
```json
- "umi": "^v3.4.0"
+ "umi": "^3.5.0",
+ "v8-compile-cache": "^2.3.0"
```
2. config/config.ts
```json
+ mfsu: {},
+ webpack5: {},
```

## Umi@3.5
### Build
1. 第一次：49.48s
2. 第二次：5.07s
3. 第三次：4.86s
4. 第四次：4.98s

### Dev
1. 启动：56.3s 
2. 首次 rebuild： 1.24s
3. A 文件首次变更 rebuild：1.04s
4. A 文件二次变更 rebuild：436.40ms
5. A 文件三次变更 rebuild：257.85ms
6. B 文件首次变更 rebuild：2.93s
7. B 文件二次变更 rebuild：632.45ms
8. B 文件三次变更 rebuild：365.98ms