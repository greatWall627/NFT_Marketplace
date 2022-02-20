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

export interface ElpisHeroTradableInterface extends utils.Interface {
  contractName: "ElpisHeroTradable";
  functions: {
    "cancelTrade(uint256)": FunctionFragment;
    "elpisHeroesData()": FunctionFragment;
    "getTrade(uint256)": FunctionFragment;
    "openTrade(uint256)": FunctionFragment;
    "openTradeWhenCreateNewPhotoNFT(uint256,uint256)": FunctionFragment;
    "trades(uint256)": FunctionFragment;
    "transferOwnershipOfElpisHero(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cancelTrade",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "elpisHeroesData",
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
    functionFragment: "cancelTrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "elpisHeroesData",
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
    "TradeStatusChange(uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TradeStatusChange"): EventFragment;
}

export type TradeStatusChangeEvent = TypedEvent<
  [BigNumber, string],
  { ad: BigNumber; status: string }
>;

export type TradeStatusChangeEventFilter =
  TypedEventFilter<TradeStatusChangeEvent>;

export interface ElpisHeroTradable extends BaseContract {
  contractName: "ElpisHeroTradable";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ElpisHeroTradableInterface;

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
    cancelTrade(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    elpisHeroesData(overrides?: CallOverrides): Promise<[string]>;

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

  cancelTrade(
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  elpisHeroesData(overrides?: CallOverrides): Promise<string>;

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
    cancelTrade(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    elpisHeroesData(overrides?: CallOverrides): Promise<string>;

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
    "TradeStatusChange(uint256,bytes32)"(
      ad?: null,
      status?: null
    ): TradeStatusChangeEventFilter;
    TradeStatusChange(ad?: null, status?: null): TradeStatusChangeEventFilter;
  };

  estimateGas: {
    cancelTrade(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    elpisHeroesData(overrides?: CallOverrides): Promise<BigNumber>;

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
    cancelTrade(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    elpisHeroesData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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
