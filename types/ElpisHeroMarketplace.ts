/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace ElpisHeroTradable {
  export type TradeStruct = {
    seller: string;
    tokenId: BigNumberish;
    tokenPrice: BigNumberish;
    status: BytesLike;
  };

  export type TradeStructOutput = [string, BigNumber, BigNumber, string] & {
    seller: string;
    tokenId: BigNumber;
    tokenPrice: BigNumber;
    status: string;
  };
}

export interface ElpisHeroMarketplaceInterface extends utils.Interface {
  contractName: "ElpisHeroMarketplace";
  functions: {
    "ELPISHERO_MARKETPLACE()": FunctionFragment;
    "buyElpisHero(uint256)": FunctionFragment;
    "cancelTrade(uint256)": FunctionFragment;
    "elpisHeroes()": FunctionFragment;
    "elpisHeroesData()": FunctionFragment;
    "elpisHeroesDataContract()": FunctionFragment;
    "getTrade(uint256)": FunctionFragment;
    "openTrade(uint256)": FunctionFragment;
    "openTradeWhenCreateNewPhotoNFT(uint256,uint256)": FunctionFragment;
    "trades(uint256)": FunctionFragment;
    "transferOwnershipOfElpisHero(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ELPISHERO_MARKETPLACE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyElpisHero",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelTrade",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "elpisHeroes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "elpisHeroesData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "elpisHeroesDataContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTrade",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "openTrade",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "openTradeWhenCreateNewPhotoNFT",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "trades",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnershipOfElpisHero",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "ELPISHERO_MARKETPLACE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buyElpisHero",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelTrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "elpisHeroes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "elpisHeroesData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "elpisHeroesDataContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTrade", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "openTrade", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "openTradeWhenCreateNewPhotoNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "trades", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnershipOfElpisHero",
    data: BytesLike
  ): Result;

  events: {
    "ElpisHeroOwnershipChanged(uint256,address,address)": EventFragment;
    "TradeStatusChange(uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ElpisHeroOwnershipChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TradeStatusChange"): EventFragment;
}

export type ElpisHeroOwnershipChangedEvent = TypedEvent<
  [BigNumber, string, string],
  {
    tokenId: BigNumber;
    ownerBeforeOwnershipTransferred: string;
    ownerAfterOwnershipTransferred: string;
  }
>;

export type ElpisHeroOwnershipChangedEventFilter =
  TypedEventFilter<ElpisHeroOwnershipChangedEvent>;

export type TradeStatusChangeEvent = TypedEvent<
  [BigNumber, string],
  { ad: BigNumber; status: string }
>;

export type TradeStatusChangeEventFilter =
  TypedEventFilter<TradeStatusChangeEvent>;

export interface ElpisHeroMarketplace extends BaseContract {
  contractName: "ElpisHeroMarketplace";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ElpisHeroMarketplaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ELPISHERO_MARKETPLACE(overrides?: CallOverrides): Promise<[string]>;

    buyElpisHero(
      _tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelTrade(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    elpisHeroes(overrides?: CallOverrides): Promise<[string]>;

    elpisHeroesData(overrides?: CallOverrides): Promise<[string]>;

    elpisHeroesDataContract(overrides?: CallOverrides): Promise<[string]>;

    getTrade(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [ElpisHeroTradable.TradeStructOutput] & {
        trade_: ElpisHeroTradable.TradeStructOutput;
      }
    >;

    openTrade(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    openTradeWhenCreateNewPhotoNFT(
      _tokenId: BigNumberish,
      _tokenPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    trades(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, string] & {
        seller: string;
        tokenId: BigNumber;
        tokenPrice: BigNumber;
        status: string;
      }
    >;

    transferOwnershipOfElpisHero(
      _tokenId: BigNumberish,
      _buyer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ELPISHERO_MARKETPLACE(overrides?: CallOverrides): Promise<string>;

  buyElpisHero(
    _tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelTrade(
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  elpisHeroes(overrides?: CallOverrides): Promise<string>;

  elpisHeroesData(overrides?: CallOverrides): Promise<string>;

  elpisHeroesDataContract(overrides?: CallOverrides): Promise<string>;

  getTrade(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<ElpisHeroTradable.TradeStructOutput>;

  openTrade(
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  openTradeWhenCreateNewPhotoNFT(
    _tokenId: BigNumberish,
    _tokenPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  trades(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, string] & {
      seller: string;
      tokenId: BigNumber;
      tokenPrice: BigNumber;
      status: string;
    }
  >;

  transferOwnershipOfElpisHero(
    _tokenId: BigNumberish,
    _buyer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ELPISHERO_MARKETPLACE(overrides?: CallOverrides): Promise<string>;

    buyElpisHero(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelTrade(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    elpisHeroes(overrides?: CallOverrides): Promise<string>;

    elpisHeroesData(overrides?: CallOverrides): Promise<string>;

    elpisHeroesDataContract(overrides?: CallOverrides): Promise<string>;

    getTrade(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<ElpisHeroTradable.TradeStructOutput>;

    openTrade(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    openTradeWhenCreateNewPhotoNFT(
      _tokenId: BigNumberish,
      _tokenPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    trades(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, string] & {
        seller: string;
        tokenId: BigNumber;
        tokenPrice: BigNumber;
        status: string;
      }
    >;

    transferOwnershipOfElpisHero(
      _tokenId: BigNumberish,
      _buyer: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ElpisHeroOwnershipChanged(uint256,address,address)"(
      tokenId?: null,
      ownerBeforeOwnershipTransferred?: null,
      ownerAfterOwnershipTransferred?: null
    ): ElpisHeroOwnershipChangedEventFilter;
    ElpisHeroOwnershipChanged(
      tokenId?: null,
      ownerBeforeOwnershipTransferred?: null,
      ownerAfterOwnershipTransferred?: null
    ): ElpisHeroOwnershipChangedEventFilter;

    "TradeStatusChange(uint256,bytes32)"(
      ad?: null,
      status?: null
    ): TradeStatusChangeEventFilter;
    TradeStatusChange(ad?: null, status?: null): TradeStatusChangeEventFilter;
  };

  estimateGas: {
    ELPISHERO_MARKETPLACE(overrides?: CallOverrides): Promise<BigNumber>;

    buyElpisHero(
      _tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelTrade(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    elpisHeroes(overrides?: CallOverrides): Promise<BigNumber>;

    elpisHeroesData(overrides?: CallOverrides): Promise<BigNumber>;

    elpisHeroesDataContract(overrides?: CallOverrides): Promise<BigNumber>;

    getTrade(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    openTrade(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    openTradeWhenCreateNewPhotoNFT(
      _tokenId: BigNumberish,
      _tokenPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    trades(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnershipOfElpisHero(
      _tokenId: BigNumberish,
      _buyer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ELPISHERO_MARKETPLACE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buyElpisHero(
      _tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelTrade(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    elpisHeroes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    elpisHeroesData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    elpisHeroesDataContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTrade(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    openTrade(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    openTradeWhenCreateNewPhotoNFT(
      _tokenId: BigNumberish,
      _tokenPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    trades(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnershipOfElpisHero(
      _tokenId: BigNumberish,
      _buyer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
