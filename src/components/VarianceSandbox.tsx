import { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ArrowUpDown } from 'lucide-react';

export default function VarianceSandbox() {
    const [inputs, setInputs] = useState({
        budgetVol: 1000,
        actualVol: 1100,
        budgetPrice: 50,
        actualPrice: 48,
        budgetVC: 30,
        actualVC: 33,
        budgetFC: 10000,
        actualFC: 10500,
    });

    const handleChange = (field: keyof typeof inputs, value: number) => {
        setInputs(prev => ({ ...prev, [field]: value }));
    };

    const computed = useMemo(() => {
        const budgetContributionMargin = inputs.budgetPrice - inputs.budgetVC;
        const budgetProfit = (inputs.budgetVol * budgetContributionMargin) - inputs.budgetFC;
        const actualContributionMargin = inputs.actualPrice - inputs.actualVC;
        const actualProfit = (inputs.actualVol * actualContributionMargin) - inputs.actualFC;

        const volumeVariance = (inputs.actualVol - inputs.budgetVol) * budgetContributionMargin;
        const priceVariance = inputs.actualVol * (inputs.actualPrice - inputs.budgetPrice);
        const variableCostVariance = inputs.actualVol * (inputs.budgetVC - inputs.actualVC);
        const fixedCostVariance = inputs.budgetFC - inputs.actualFC;

        return { budgetProfit, actualProfit, volumeVariance, priceVariance, variableCostVariance, fixedCostVariance };
    }, [inputs]);

    const chartData = useMemo(() => {
        const { budgetProfit, volumeVariance, priceVariance, variableCostVariance, fixedCostVariance, actualProfit } = computed;

        let currentBase = budgetProfit;
        const makeStep = (name: string, value: number, isTotal = false) => {
            if (isTotal) {
                return { name, start: 0, val: Math.max(0, value), negVal: Math.min(0, value), color: 'var(--text-muted)', rawValue: value };
            }
            const isPositive = value >= 0;
            const start = isPositive ? currentBase : currentBase + value;
            const color = isPositive ? 'var(--green)' : 'var(--red)';
            currentBase += value;
            return { name, start, val: Math.abs(value), color, rawValue: value };
        };

        return [
            makeStep('Budget Profit', budgetProfit, true),
            makeStep('Volume', volumeVariance),
            makeStep('Selling Price', priceVariance),
            makeStep('Variable Cost', variableCostVariance),
            makeStep('Fixed Cost', fixedCostVariance),
            makeStep('Actual Profit', actualProfit, true)
        ];
    }, [computed]);

    const InputRow = ({ label, budgetField, actualField }: { label: string, budgetField: keyof typeof inputs, actualField: keyof typeof inputs }) => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '14px',
            padding: '6px 0',
            borderBottom: '1px solid var(--border-subtle)',
        }}>
            <span style={{ color: 'var(--text-secondary)', width: '40%' }}>{label}</span>
            <input
                type="number"
                value={inputs[budgetField]}
                onChange={e => handleChange(budgetField, Number(e.target.value))}
                style={{
                    width: '25%',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--input-border)',
                    borderRadius: '6px',
                    padding: '6px 8px',
                    color: 'var(--text-primary)',
                    textAlign: 'center',
                    fontSize: '14px',
                    outline: 'none',
                }}
            />
            <input
                type="number"
                value={inputs[actualField]}
                onChange={e => handleChange(actualField, Number(e.target.value))}
                style={{
                    width: '25%',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--input-border)',
                    borderRadius: '6px',
                    padding: '6px 8px',
                    color: 'var(--text-primary)',
                    textAlign: 'center',
                    fontSize: '14px',
                    outline: 'none',
                }}
            />
        </div>
    );

    const formatMoney = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            const step = chartData.find(d => d.name === label);
            if (!step) return null;

            const isTotal = label === 'Budget Profit' || label === 'Actual Profit';
            const val = step.rawValue ?? 0;
            const sign = !isTotal && val > 0 ? '+' : '';

            return (
                <div style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-lg)',
                    fontSize: '13px',
                }}>
                    <p style={{ margin: '0 0 4px', color: 'var(--text-muted)' }}>{label}</p>
                    <p style={{
                        margin: 0,
                        fontWeight: 600,
                        color: isTotal ? 'var(--text-primary)' : (val >= 0 ? 'var(--green)' : 'var(--red)'),
                    }}>
                        {sign}{formatMoney(val)}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginTop: '24px',
            borderTop: '1px solid var(--border)',
            paddingTop: '20px',
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <ArrowUpDown size={16} style={{ color: 'var(--accent)' }} />
                <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Interactive Waterfall Builder
                </h4>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {/* Input column */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    background: 'var(--card-hover)',
                    padding: '18px',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                    }}>
                        <span style={{ width: '40%' }}>Metric</span>
                        <span style={{ width: '25%', textAlign: 'center' }}>Budget</span>
                        <span style={{ width: '25%', textAlign: 'center' }}>Actual</span>
                    </div>
                    <InputRow label="Volume" budgetField="budgetVol" actualField="actualVol" />
                    <InputRow label="Price per Unit" budgetField="budgetPrice" actualField="actualPrice" />
                    <InputRow label="Variable Cost per Unit" budgetField="budgetVC" actualField="actualVC" />
                    <InputRow label="Total Fixed Costs" budgetField="budgetFC" actualField="actualFC" />

                    <div style={{
                        marginTop: '16px',
                        paddingTop: '14px',
                        borderTop: '1px solid var(--border)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '14px',
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ margin: '0 0 4px', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Budget Profit</p>
                            <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)' }}>{formatMoney(computed.budgetProfit)}</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ margin: '0 0 4px', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Actual Profit</p>
                            <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)' }}>{formatMoney(computed.actualProfit)}</p>
                        </div>
                    </div>
                </div>

                {/* Chart column */}
                <div style={{
                    height: '260px',
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '12px',
                }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
                            <XAxis
                                dataKey="name"
                                tick={{ fontSize: 10, fill: 'var(--text-muted)' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(128,128,128,0.06)' }} />
                            <Bar dataKey="start" stackId="a" fill="transparent" isAnimationActive={false} />
                            <Bar dataKey="val" stackId="a" radius={4}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                background: 'var(--card-hover)',
                padding: '14px 16px',
                borderRadius: '10px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                lineHeight: 1.7,
            }}>
                <span>💡</span>
                <p style={{ margin: 0 }}>
                    The Volume variance is driven by missing the quantity target. The Selling Price and Variable Cost variances flex with actual volume to show the true efficiency and revenue impacts at the volume actually achieved.
                </p>
            </div>
        </div>
    );
}
