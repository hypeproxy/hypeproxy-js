/* THIS (.ts) FILE IS GENERATED BY Tapper */
/* eslint-disable */
/* tslint:disable */
import { PaymentMethods, BillingPeriods } from './HypeProxy.Constants';
import { BaseEntity } from './HypeProxy.Entities';

/** Transpiled from HypeProxy.Entities.Price.Price */
export type Price = {
    /** Transpiled from System.Guid */
    productId?: string;
    /** Transpiled from System.Guid */
    locationId?: string;
    /** Transpiled from System.Guid */
    providerId?: string;
    /** Transpiled from HypeProxy.Constants.PaymentMethods */
    paymentMethod: PaymentMethods;
    /** Transpiled from HypeProxy.Constants.BillingPeriods */
    billingPeriod: BillingPeriods;
    /** Transpiled from string */
    planId?: string;
    /** Transpiled from string? */
    planIdPeriod?: string;
    /** Transpiled from double */
    unitPrice: number;
    /** Transpiled from System.Collections.Generic.IEnumerable<HypeProxy.Entities.Price.PriceTiers>? */
    priceTiers?: PriceTiers[];
} & BaseEntity;

/** Transpiled from HypeProxy.Entities.Price.PriceTiers */
export type PriceTiers = {
    /** Transpiled from int */
    maximumQuantity: number;
    /** Transpiled from double */
    unitPrice: number;
}

