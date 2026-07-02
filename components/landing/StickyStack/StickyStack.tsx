import React from 'react';
import { StackPanelBorrow } from './StackPanelBorrow';
import { StackPanelEarn } from './StackPanelEarn';
import { StackPanelLearn } from './StackPanelLearn';
import { StackPanelBuildCredit } from './StackPanelBuildCredit';
import { StackPanelCampusRewards } from './StackPanelCampusRewards';
import { StackPanelFinancialFreedom } from './StackPanelFinancialFreedom';

export const StickyStack = () => {
  return (
    <section className="relative w-full">
      <StackPanelBorrow />
      <StackPanelEarn />
      <StackPanelLearn />
      <StackPanelBuildCredit />
      <StackPanelCampusRewards />
      <StackPanelFinancialFreedom />
    </section>
  );
};
