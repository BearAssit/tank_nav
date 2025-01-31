let mbt = document.getElementsByClassName("nav-mobile-toggle")[0]
let nl = document.getElementsByClassName("nav-links")[0]
mbt.addEventListener("click", function() {
    nl.style.display = nl.style.display === "none" ? "flex" : "none"
})



// 定义升级成本数据
const upgradeCosts = {
    turret: {
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
            costs: [1000, 2140, 3290, 4430, 5570, 6710, 7860, 9000],
            totalCost: 40000
        },
        mk4: {
            maxLevel: 10,
            costs: [1000, 2330, 3670, 5000, 6330, 7670, 9000, 10330, 11670, 13000],
            totalCost: 70000
        },
        mk5: {
            maxLevel: 11,
            costs: [1000, 2800, 4600, 6400, 8200, 10000, 11800, 13600, 15400, 17200, 19000],
            totalCost: 110000
        },
        mk6: {
            maxLevel: 12,
            costs: [3000, 4730, 6450, 8180, 9910, 11640, 13360, 15090, 16820, 18550, 20270, 22000],
            totalCost: 150000
        },
        mk7: {
            maxLevel: 20,
            costs: [5000, 6870, 8750, 10620, 12490, 14370, 16240, 18120, 19990, 21860, 23740, 25610, 27480, 29360, 31230, 33110, 34980, 36850, 38730, 40600],
            totalCost: 456000
        }
    },
    chassis: {
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
            costs: [5000, 6520, 8030, 9550, 11060, 12580, 14090, 15610, 17130, 18640, 20160, 21670, 23190, 24710, 26220, 27740, 29250, 30770, 32280, 33800],
            totalCost: 388000
        }
    },
    grenade: {
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
            costs: [1000, 1710, 2430, 3140, 3860, 4570, 5290, 6000],
            totalCost: 28000
        },
        mk4: {
            maxLevel: 10,
            costs: [1000, 1890, 2780, 3670, 4560, 5440, 6330, 7220, 8110, 9000],
            totalCost: 50000
        },
        mk5: {
            maxLevel: 11,
            costs: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000],
            totalCost: 66000
        },
        mk6: {
            maxLevel: 12,
            costs: [3000, 4090, 5180, 6270, 7360, 8450, 9550, 10640, 11730, 12820, 13910, 15000],
            totalCost: 108000
        },
        mk7: {
            maxLevel: 20,
            costs: [5000, 6160, 7320, 8470, 9630, 10790, 11950, 13110, 14260, 15420, 16580, 17740, 18890, 20050, 21210, 22370, 23530, 24680, 25840, 27000],
            totalCost: 320000
        }
    },
    drone: {
        mk7: {
            maxLevel: 20,
            costs: [1000, 6160, 11320, 16470, 21630, 26790, 31950, 37110, 42260, 47420, 52580, 57740, 62890, 68050, 73210, 78370, 83530, 88680, 93840, 99000],
            totalCost: 1000000
        }
    },
    module: {
        maxLevel: 45,
        costs: [6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000,
                16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000,
                26000, 27000, 28000, 29000, 30000, 31000, 32000, 33000, 34000, 35000,
                36000, 37000, 38000, 39000, 40000, 41000, 42000, 43000, 44000, 45000,
                46000, 47000, 48000, 49000, 50000],
        protection: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                     15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
                     25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
                     35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
                     45, 46, 47, 48, 49, 50],
        totalCost: 1260000
    }
};

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
        costs: [5000, 6520, 8030, 9550, 11060, 12580, 14090, 15610, 17130, 18640, 20160, 21670, 23190, 24710, 26220, 27740, 29250, 30770, 32280, 33800],
        totalCost: 388000
    }
};

// 添加炮塔升级数据
const turretData = {
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
        costs: [1000, 2140, 3290, 4430, 5570, 6710, 7860, 9000],
        totalCost: 40000
    },
    mk4: {
        maxLevel: 10,
        costs: [1000, 2330, 3670, 5000, 6330, 7670, 9000, 10330, 11670, 13000],
        totalCost: 70000
    },
    mk5: {
        maxLevel: 11,
        costs: [1000, 2800, 4600, 6400, 8200, 10000, 11800, 13600, 15400, 17200, 19000],
        totalCost: 110000
    },
    mk6: {
        maxLevel: 12,
        costs: [3000, 4730, 6450, 8180, 9910, 11640, 13360, 15090, 16820, 18550, 20270, 22000],
        totalCost: 150000
    },
    mk7: {
        maxLevel: 20,
        costs: [5000, 6870, 8750, 10620, 12490, 14370, 16240, 18120, 19990, 21860, 23740, 25610, 27480, 29360, 31230, 33110, 34980, 36850, 38730, 40600],
        totalCost: 456000
    }
};

// 页面加载完成后初始化所有选项
document.addEventListener('DOMContentLoaded', function() {
    // 初始化炮塔选项
    updateLevelOptions('turret');
    
    // 初始化底盘选项
    updateLevelOptions('chassis');
    
    // 初始化手榴弹选项
    updateLevelOptions('grenade');
    
    // 初始化模块选项
    updateLevelOptions('module');
});

// 更新等级选项的函数
function updateLevelOptions(type) {
    const mkSelect = document.getElementById(`${type}-mk`);
    const currentSelect = document.getElementById(`${type}-current`);
    const selectedMk = mkSelect.value;
    
    // 清空现有选项
    currentSelect.innerHTML = '';
    
    let maxLevel;
    switch(type) {
        case 'turret':
            maxLevel = turretData[selectedMk].maxLevel;
            break;
        case 'chassis':
            maxLevel = chassisData[selectedMk].maxLevel;
            break;
        case 'grenade':
            maxLevel = upgradeCosts.grenade[selectedMk].maxLevel;
            break;
        case 'module':
            maxLevel = upgradeCosts.module.maxLevel;
            break;
    }
    
    console.log(`Updating levels for ${type}, maxLevel: ${maxLevel}`);
    // 添加等级选项
    for (let i = 0; i <= maxLevel; i++) {
        console.log(`Adding level: ${i}`);
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i + '级';
        currentSelect.appendChild(option);
    }
    
    // 设置默认值
    currentSelect.value = "0";
    
    // 更新目标MK选项
    updateTargetMkOptions(type);
}

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
    const maxMk = 7;
    
    // 只添加大于等于当前MK的选项
    for (let i = currentMkNumber; i <= maxMk; i++) {
        const option = document.createElement('option');
        option.value = `mk${i}`;
        option.textContent = `MK${i}`;
        targetMkSelect.appendChild(option);
    }
    
    // 默认选择当前MK
    targetMkSelect.value = currentMk;
    
    // 更新目标等级选项
    updateTargetLevelOptions(type);
}

// 更新目标等级选项
function updateTargetLevelOptions(type) {
    const targetMkSelect = document.getElementById(`${type}-target-mk`);
    const targetSelect = document.getElementById(`${type}-target-level`);
    const selectedTargetMk = targetMkSelect.value;
    
    // 清空现有选项
    targetSelect.innerHTML = '';
    
    let maxLevel;
    switch(type) {
        case 'turret':
            maxLevel = turretData[selectedTargetMk].maxLevel;
            break;
        case 'chassis':
            maxLevel = chassisData[selectedTargetMk].maxLevel;
            break;
        case 'grenade':
            maxLevel = upgradeCosts.grenade[selectedTargetMk].maxLevel;
            break;
        case 'module':
            maxLevel = upgradeCosts.module.maxLevel;
            break;
    }
    
    // 添加等级选项
    for (let i = 0; i <= maxLevel; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i + '级';
        targetSelect.appendChild(option);
    }
    
    // 设置默认值
    targetSelect.value = "0";
}

// 确保这些变量在全局范围内定义
let lastCalculatedCost = 0;
let currentDiscount = 1;

// 计算升级成本的函数
function calculateCustomCost(type) {
    console.log('=== 开始调试信息 ===');
    console.log('函数调用位置: script.js');
    console.log('装备类型:', type);
    console.log('turretData:', turretData);
    console.log('chassisData:', chassisData);
    
    const currentMk = document.getElementById(`${type}-mk`).value;
    console.log('currentMk:', currentMk);
    
    let data;
    switch(type) {
        case 'turret':
            data = turretData;
            console.log('选择了炮塔数据');
            break;
        case 'chassis':
            data = chassisData;
            console.log('选择了底盘数据');
            break;
        case 'grenade':
            data = upgradeCosts.grenade;
            console.log('选择了手榴弹数据');
            break;
        case 'drone':
            data = upgradeCosts.drone;
            console.log('选择了无人机数据');
            break;
        case 'module':
            data = upgradeCosts.module;
            console.log('选择了模块数据');
            break;
        default:
            console.error('未知的装备类型:', type);
            return;
    }
    
    console.log('选择的数据:', data);
    
    if (!data) {
        console.error('数据为空');
        return;
    }
    
    if (!data[currentMk] && type !== 'module') {
        console.error(`找不到 ${currentMk} 的数据`);
        console.log('可用的键:', Object.keys(data));
        return;
    }
    
    const targetMk = document.getElementById(`${type}-target-mk`).value;
    const currentLevel = parseInt(document.getElementById(`${type}-current`).value);
    const targetLevel = parseInt(document.getElementById(`${type}-target-level`).value);
    
    console.log('当前MK:', currentMk); 
    console.log('目标MK:', targetMk); 
    console.log('当前等级:', currentLevel); 
    console.log('目标等级:', targetLevel); 
    console.log('数据:', data);

    let totalCost = 0;
    try {
        if (currentMk === targetMk) {
            console.log('数据:', data);
            console.log('数据222:', data[currentMk].costs.length);
            for (let i = currentLevel; i < targetLevel; i++) {
                if (i < data[currentMk].costs.length) {
                    totalCost += data[currentMk].costs[i];
                    console.log(`添加成本: ${data[currentMk].costs[i]}, 总成本: ${totalCost}`);
                    } else {
                            console.error('索引超出范围:', i);
                        }
            }
        } else {
            const mkOrder = ['mk1', 'mk2', 'mk3', 'mk4', 'mk5', 'mk6', 'mk7'];
            const currentMkIndex = mkOrder.indexOf(currentMk);
            const targetMkIndex = mkOrder.indexOf(targetMk);

            const currentMkMax = data[currentMk].maxLevel;
            for (let i = currentLevel; i < currentMkMax; i++) {
                if (i < data[currentMk].costs.length) {
                    totalCost += data[currentMk].costs[i];
                    console.log(`当前MK成本: ${data[currentMk].costs[i]}, 总成本: ${totalCost}`);
                } else {
                    console.error('索引超出范围:', i);
                }
            }

            for (let i = currentMkIndex + 1; i < targetMkIndex; i++) {
                const mk = mkOrder[i];
                for (let j = 0; j < data[mk].maxLevel; j++) {
                    if (j < data[mk].costs.length) {
                        totalCost += data[mk].costs[j];
                        console.log(`中间MK成本: ${data[mk].costs[j]}, 总成本: ${totalCost}`);
                    } else {
                        console.error('索引超出范围:', j);
                    }
                }
            }

            for (let i = 0; i < targetLevel; i++) {
                if (i < data[targetMk].costs.length) {
                    totalCost += data[targetMk].costs[i];
                    console.log(`目标MK成本: ${data[targetMk].costs[i]}, 总成本: ${totalCost}`);
                } else {
                    console.error('索引超出范围:', i);
                }
            }
        }

        console.log('最终总成本:', totalCost);
        lastCalculatedCost = totalCost;

        const resultElement = document.getElementById(`${type}-result`);
        resultElement.style.display = 'block';

        if (currentDiscount < 1) {
            const discountedCost = Math.floor(totalCost * currentDiscount);
            resultElement.innerHTML = `
                <div class="result-detail">
                    <p>升级所需水晶：</p>
                    <p>原价：${totalCost.toLocaleString()} 水晶</p>
                    <p>折扣价：${discountedCost.toLocaleString()} 水晶</p>
                </div>
            `;
        } else {
            resultElement.innerHTML = `
                <div class="result-detail">
                    <p>升级所需水晶：${totalCost.toLocaleString()}</p>
                </div>
            `;
        }
    } catch (error) {
        console.error('计算过程中出错:', error);
    }
}

// 计算模块升级成本
function calculateModuleCost() {
    const currentLevel = parseInt(document.getElementById('module-current').value);
    const targetLevel = parseInt(document.getElementById('module-target').value);
    let totalCost = 0;
    let protectionLevel = 0;

    console.log('当前等级:', currentLevel); 
    console.log('目标等级:', targetLevel); 

    for (let i = currentLevel; i < targetLevel; i++) {
        totalCost += upgradeCosts.module.costs[i];
    }

    protectionLevel = upgradeCosts.module.protection[targetLevel];

    console.log('模块最终总成本:', totalCost);
    console.log('最终防护等级:', protectionLevel);
    lastCalculatedCost = totalCost;

    const resultElement = document.getElementById('module-result');
    resultElement.style.display = 'block';

    if (currentDiscount < 1) {
        const discost = Math.floor(totalCost * currentDiscount);
        resultElement.innerHTML = `
        <div class="result-detail">
            <p>升级所需水晶：</p>
            <p>原价：${totalCost.toLocaleString()} 水晶</p>
            <p>折扣价：${discost.toLocaleString()} 水晶</p>
            <p>最终防护等级：${protectionLevel}%</p>
        </div>
    `;

    } else {
        resultElement.innerHTML = `
        <div class="result-detail">
            <p>升级所需水晶：${totalCost.toLocaleString()}</p>
            <p>最终防护等级：${protectionLevel}%</p>
        </div>
    `;
    }
}

function calculateDroneCost() {
    const currentLevel = parseInt(document.getElementById('drone-current').value);
    const targetLevel = parseInt(document.getElementById('drone-target').value);
    let totalCost = 0;

    console.log('当前等级:', currentLevel); 
    console.log('目标等级:', targetLevel); 

    for (let i = currentLevel; i < targetLevel; i++) {
        totalCost += upgradeCosts.drone.mk7.costs[i];
    }

   

    console.log('无人机最终总成本:', totalCost);
    lastCalculatedCost = totalCost;

    const resultElement = document.getElementById('drone-result');
    resultElement.style.display = 'block';

    if (currentDiscount < 1) {
        let discost = Math.floor(totalCost * currentDiscount);
        resultElement.innerHTML = `
        <div class="result-detail">
            <p>升级所需水晶：</p>
            <p>原价：${totalCost.toLocaleString()}水晶</p>
            <p>折扣价：${discost.toLocaleString()}水晶</p>
        </div>
    `;
    } else {resultElement.innerHTML = `
        <div className="result-detail">
            <p>升级所需水晶：${totalCost.toLocaleString()}</p>
        </div>
    `;
    }

}

// 设置折扣函数
function setDiscount(btn) {
    // 移除所有按钮的active类
    document.querySelectorAll('.discount-btn').forEach(button => {
        button.classList.remove('active');
    });
    
    // 添加active类到被点击的按钮
    btn.classList.add('active');
    
    // 更新折扣值
    currentDiscount = parseFloat(btn.dataset.value);

    // 如果有上次计算的结果，立即更新显示
    if (lastCalculatedCost > 0) {
        updateDiscountedResult();
    }
}

// 确保函数在全局范围内可用
window.calculateCustomCost = calculateCustomCost;
window.calculateModuleCost = calculateModuleCost;
window.setDiscount = setDiscount;

// 在页面加载完成后检查数据
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== 页面加载完成，检查数据 ===');
    console.log('turretData 可用:', !!window.turretData);
    console.log('chassisData 可用:', !!window.chassisData);
    console.log('calculateCustomCost 可用:', !!window.calculateCustomCost);
    console.log('calculateModuleCost 可用:', !!window.calculateModuleCost);
});