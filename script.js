// 更新底盘升级数据
const chassisData = {
    mk1: {
        maxLevel: 3,
        costs: [100, 1000, 1900],
        totalCost: 3000
    },
    mk2: {
        maxLevel: 5,
        costs: [1000, 2000, 3000, 4000, 5000],
        totalCost: 15000
    },
    mk3: {
        maxLevel: 8,
        costs: [1000, 1930, 2860, 3790, 4710, 5640, 6570, 7500],
        totalCost: 34000
    },
    mk4: {
        maxLevel: 10,
        costs: [1000, 2110, 3220, 4330, 5440, 6560, 7670, 8780, 9890, 11000],
        totalCost: 60000
    },
    mk5: {
        maxLevel: 11,
        costs: [1000, 2400, 3800, 5200, 6600, 8000, 9400, 10800, 12200, 13600, 15000],
        totalCost: 88000
    },
    mk6: {
        maxLevel: 12,
        costs: [3000, 4410, 5820, 7230, 8640, 10050, 11450, 12860, 14270, 15680, 17090, 18500],
        totalCost: 129000
    },
    mk7: {
        maxLevel: 20,
        costs: [5000, 6520, 8030, 9550, 11060, 12580, 14090, 18120, 15610, 17130, 
                18640, 20160, 21670, 23190, 24710, 26220, 27740, 29250, 30770, 32280],
        totalCost: 388000
    }
};

// 更新目标MK等级选项
function updateTargetMkOptions(type) {
    const currentMkSelect = document.getElementById(`${type}-mk`);
    const targetMkSelect = document.getElementById(`${type}-target-mk`);
    const currentMk = currentMkSelect.value;
    
    // 清空现有选项
    targetMkSelect.innerHTML = '';
    
    // 获取当前MK的数字
    const currentMkNumber = parseInt(currentMk.replace('mk', ''));
    
    // 获取最大MK等级
    const maxMk = type === 'chassis' ? 7 : 7;
    
    // 只添加大于等于当前MK的选项
    for (let i = currentMkNumber; i <= maxMk; i++) {
        const option = document.createElement('option');
        option.value = `mk${i}`;
        option.textContent = `MK${i}`;
        targetMkSelect.appendChild(option);
    }
    
    // 默认选择当前MK
    targetMkSelect.value = currentMk;
    
    // 更新等级选项
    updateTargetLevelOptions(type);
}

// 更新等级选项的函数
function updateLevelOptions(type) {
    const mkSelect = document.getElementById(`${type}-mk`);
    const currentSelect = document.getElementById(`${type}-current`);
    const selectedMk = mkSelect.value;
    
    currentSelect.innerHTML = '';
    
    const maxLevel = type === 'chassis' ? 
        chassisData[selectedMk].maxLevel - 1 : 
        turretData[selectedMk].maxLevel - 1;
    
    for (let i = 0; i <= maxLevel; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        currentSelect.appendChild(option);
    }

    currentSelect.value = "0";
    
    // 更新目标MK选项
    updateTargetMkOptions(type);
}

// 更新目标等级选项的函数
function updateTargetLevelOptions(type) {
    const targetMkSelect = document.getElementById(`${type}-target-mk`);
    const currentSelect = document.getElementById(`${type}-current`);
    const targetSelect = document.getElementById(`${type}-target-level`);
    const currentMkSelect = document.getElementById(`${type}-mk`);
    
    const selectedTargetMk = targetMkSelect.value;
    const currentMk = currentMkSelect.value;
    const currentLevel = parseInt(currentSelect.value);
    
    targetSelect.innerHTML = '';
    
    const maxLevel = type === 'chassis' ? 
        chassisData[selectedTargetMk].maxLevel - 1 : 
        turretData[selectedTargetMk].maxLevel - 1;
    
    // 如果是同MK等级，则只能选择大于当前等级的选项
    const startLevel = (currentMk === selectedTargetMk) ? currentLevel : 0;
    
    for (let i = startLevel; i <= maxLevel; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        targetSelect.appendChild(option);
    }

    // 设置默认值
    if (targetSelect.options.length > 0) {
        targetSelect.value = startLevel;
    }
}

// 计算升级成本的函数
function calculateCustomCost(type) {
    const mkSelect = document.getElementById(`${type}-mk`);
    const currentSelect = document.getElementById(`${type}-current`);
    const targetMkSelect = document.getElementById(`${type}-target-mk`);
    const targetSelect = document.getElementById(`${type}-target-level`);
    const resultDiv = document.getElementById(`${type}-result`);
    
    // 检查输入是否为空
    if (!currentSelect.value || !targetSelect.value) {
        alert('请选择当前等级和目标等级！');
        return;
    }
    
    const currentMk = mkSelect.value;
    const targetMk = targetMkSelect.value;
    const currentLevel = parseInt(currentSelect.value);
    const targetLevel = parseInt(targetSelect.value);
    
    // 验证输入值是否为有效数字
    if (isNaN(currentLevel) || isNaN(targetLevel)) {
        alert('请输入有效的等级数值！');
        return;
    }
    
    // 获取当前和目标的MK数字
    const currentMkNumber = parseInt(currentMk.replace('mk', ''));
    const targetMkNumber = parseInt(targetMk.replace('mk', ''));
    
    // 检查MK等级关系
    if (targetMkNumber < currentMkNumber) {
        alert('不能降级到更低的MK等级！');
        return;
    }
    
    const data = type === 'chassis' ? chassisData : turretData;
    
    let totalCost = 0;
    
    if (currentMk === targetMk) {
        // 同MK等级内升级
        if (targetLevel <= currentLevel) {
            alert('目标等级必须高于当前等级！');
            return;
        }
        for (let i = currentLevel; i < targetLevel; i++) {
            totalCost += data[currentMk].costs[i];
        }
        
        // 显示结果到对应的结果区域
        resultDiv.innerHTML = `
            <p>升级成本：${totalCost.toLocaleString()} 水晶</p>
            <p>当前：${currentMk.toUpperCase()} - ${currentLevel}级</p>
            <p>目标：${targetMk.toUpperCase()} - ${targetLevel}级</p>
        `;
        resultDiv.style.display = 'block';
    } else {
        // 跨MK等级升级暂不支持
        alert('暂不支持跨MK等级升级计算');
        return;
    }
}

// 更新底盘的HTML选项
function updateChassisOptions() {
    const mkSelect = document.getElementById('chassis-mk');
    const targetMkSelect = document.getElementById('chassis-target-mk');
    
    // 清空现有选项
    mkSelect.innerHTML = '';
    targetMkSelect.innerHTML = '';
    
    // 添加MK1-MK7选项
    for (let i = 1; i <= 7; i++) {
        // 当前MK选项
        const option = document.createElement('option');
        option.value = `mk${i}`;
        option.textContent = `MK${i}`;
        mkSelect.appendChild(option.cloneNode(true));
    }
}

// 页面加载时初始化选项
document.addEventListener('DOMContentLoaded', function() {
    // 初始化炮塔选项
    updateLevelOptions('turret');
    
    // 更新底盘的MK选项并初始化
    updateChassisOptions();
    updateLevelOptions('chassis');
    
    // 添加MK选择变化的事件监听器
    document.getElementById('turret-mk').addEventListener('change', function() {
        updateLevelOptions('turret');
    });
    
    document.getElementById('chassis-mk').addEventListener('change', function() {
        updateLevelOptions('chassis');
    });
});

// 底盘升级成本计算函数
function calculateChassisCost() {
    const mkSelect = document.getElementById('chassis-mk');
    const currentSelect = document.getElementById('chassis-current');
    const targetMkSelect = document.getElementById('chassis-target-mk');
    const targetSelect = document.getElementById('chassis-target-level');
    const resultDiv = document.getElementById('chassis-result');
    
    // 检查是否有选择值
    if (!currentSelect.value || !targetSelect.value) {
        alert('请选择当前等级和目标等级！');
        return;
    }
    
    const currentMk = mkSelect.value;
    const targetMk = targetMkSelect.value;
    const currentLevel = parseInt(currentSelect.value);
    const targetLevel = parseInt(targetSelect.value);
    
    // 验证输入值是否为有效数字
    if (isNaN(currentLevel) || isNaN(targetLevel)) {
        alert('请输入有效的等级数值！');
        return;
    }
    
    // 检查等级关系
    if (targetLevel <= currentLevel) {
        alert('目标等级必须高于当前等级！');
        return;
    }
    
    // 检查MK等级关系
    if (currentMk !== targetMk) {
        alert('暂不支持跨MK等级升级计算');
        return;
    }
    
    let totalCost = 0;
    
    // 计算升级成本
    for (let i = currentLevel; i < targetLevel; i++) {
        if (chassisData[currentMk].costs[i] === undefined) {
            alert('无效的等级范围！');
            return;
        }
        totalCost += chassisData[currentMk].costs[i];
    }
    
    // 显示结果
    resultDiv.innerHTML = `
        <p>升级成本：${totalCost.toLocaleString()} 水晶</p>
        <p>当前：${currentMk.toUpperCase()} - ${currentLevel}级</p>
        <p>目标：${targetMk.toUpperCase()} - ${targetLevel}级</p>
    `;
    resultDiv.style.display = 'block';
    
    // 应用折扣（如果有）
    const discountInput = document.getElementById('discount');
    if (discountInput.value) {
        updateDiscountedResult('chassis');
    }
}

function updateDiscountedResult(type) {
    const resultDiv = document.getElementById(`${type}-result`);
    const discountInput = document.getElementById('discount');
    const discountValue = parseFloat(discountInput.value) || 0;
    
    // 获取原始文本中的数值
    const originalText = resultDiv.innerHTML;
    const costMatch = originalText.match(/升级成本：([\d,]+)/);
    
    if (costMatch) {
        const originalCost = parseInt(costMatch[1].replace(/,/g, ''));
        const discountedCost = Math.round(originalCost * (1 - discountValue / 100));
        
        // 更新显示结果
        resultDiv.innerHTML = originalText.replace(
            /升级成本：[\d,]+/,
            `升级成本：${discountedCost.toLocaleString()}`        );
    }
} 
